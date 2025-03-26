import { useQuery } from '@tanstack/react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

// 데이터를 가져오는 함수
const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export default function TodoList() {
  // useQuery 훅 사용하기
  const { data, isLoading, isError, error } = useQuery<Todo[]>({
    queryKey: ['todos'], // 쿼리 키 (캐시 식별자)
    queryFn: fetchTodos, // 데이터를 가져오는 함수
    
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>에러: {error.message}</div>;
  }

  return (
    <ul>
      {data?.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}