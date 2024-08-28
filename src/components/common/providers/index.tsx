import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "src/components/routers/index";
import GlobalStyles from "src/styles/global";
import AuthCheck from "src/components/common/HOF/authcheck";
import PageTemplate from "src/components/common/pageTemplate";

const createQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                retryOnMount: false,
                refetchOnWindowFocus: false,
                refetchOnReconnect: false,
            },
        },
    });
};

const Providers = () => {
    const queryClient = React.useMemo(createQueryClient, []);
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <BrowserRouter>
                <AuthCheck>
                    <PageTemplate>
                        <Router />
                    </PageTemplate>
                </AuthCheck>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default Providers;
