import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

// Todo 인터페이스 정의
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

// 새 Todo를 생성할 때 사용할 인터페이스 (id는 서버에서 생성)
interface NewTodo {
  title: string;
  completed: boolean;
  userId?: number;
}

// 데이터를 생성하는 함수
const createTodo = async (newTodo: NewTodo): Promise<Todo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create todo');
  }
  
  return response.json();
};

export default function AddTodo() {
  const queryClient = useQueryClient();

  // useMutation 훅 사용하기
  const mutation = useMutation<Todo, Error, NewTodo>({
    mutationFn: createTodo,
    onSuccess: () => {
      // 성공 시 'todos' 쿼리를 무효화하여 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const titleInput = form.elements.namedItem('title') as HTMLInputElement;
    const title = titleInput.value;
    mutation.mutate({ title, completed: false });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="할 일 입력" />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? '추가 중...' : '추가'}
      </button>
    </form>
  );
}