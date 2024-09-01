import { browser } from '$app/environment';
import { QueryClient } from '@tanstack/svelte-query';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

export const load = async () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
				staleTime: 15,
				refetchOnMount: false
			}
		}
	});

	return { queryClient };
};

inject({ mode: dev ? 'development' : 'production' });