import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { ToDos } from './features';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1> To-do List </h1>
      <ToDos />
    </QueryClientProvider>
  );
}

export default App;
