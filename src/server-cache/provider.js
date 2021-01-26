import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        console.log(error);
        if (error.status === 404) return false;
        else if (failureCount < 1) return true;
        else return false;
      },
    },
  },
});

function ServerCacheProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export { ServerCacheProvider };
