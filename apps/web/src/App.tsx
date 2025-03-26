import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
// import ZustandCounter from './components/zustand-counter'
// import Counter from './components/zustand-counter'
// import ReduxCounter from './components/redux-counter'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import TodoList from './components/tanstack-query/use-query';
import AddTodo from './components/tanstack-query/use-mutation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분
      gcTime: 10 * 60 * 1000, // 10분
      retry: 1, // 실패 시 재시도 횟수
      refetchOnWindowFocus: false, // 창 포커스 시 자동 재요청 비활성화
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ZustandCounter /> */}
        {/* <ReduxCounter /> */}
        {/* <TodoList /> */}
        <AddTodo />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </QueryClientProvider>
    </>
  )
}

export default App
