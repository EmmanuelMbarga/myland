import "./App.css";
import RouterApp from "./routers/router";
import { QueryClientProvider ,QueryClient} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"


const queryClient=new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterApp/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
    </>
  );
}

export default App;
