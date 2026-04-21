'use client';

import { useEffect } from 'react';

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-midnight via-dark-purple to-indigo-deep flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="text-9xl font-bold text-pink-main mb-4">!</div>
                    <h1 className="text-4xl font-bold text-white font-josefinSans mb-4">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-secondary text-lg font-poppins mb-6">
                        We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={reset}
                        className="w-full bg-gradient-purple-pink text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 font-poppins"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full bg-transparent border-2 border-secondary text-secondary font-semibold py-3 px-6 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-200 font-poppins"
                    >
                        Go Home
                    </button>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <details className="mt-8 text-left">
                        <summary className="text-secondary cursor-pointer font-poppins mb-2">
                            Error Details (Development Only)
                        </summary>
                        <div className="bg-black/20 p-4 rounded-lg text-sm text-white font-mono overflow-auto">
                            <p className="mb-2"><strong>Error:</strong> {error.message}</p>
                            {error.digest && <p className="mb-2"><strong>Digest:</strong> {error.digest}</p>}
                            <p><strong>Stack:</strong></p>
                            <pre className="whitespace-pre-wrap text-xs mt-1">{error.stack}</pre>
                        </div>
                    </details>
                )}
            </div>
        </div>
    );
}