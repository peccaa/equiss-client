"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TopLoadingBar } from "@/components/ui/top-loading-bar";

export function QueryProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            console.error("Query error:", error);
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            onError: (error: any) => {
              toast.error(error?.message || "An error occurred");
            },
          },
        },
      }),
  );

  // Track active queries to control loading bar
  useEffect(() => {
    return queryClient.getQueryCache().subscribe(() => {
      const queries = queryClient.getQueryCache().getAll();
      const isAnyQueryFetching = queries.some(
        (query) => query.state.fetchStatus === "fetching",
      );
      setIsLoading(isAnyQueryFetching);
    });
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <TopLoadingBar isLoading={isLoading} color="#3b82f6" />
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
