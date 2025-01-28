export default function Error404() {
    return (
        <div className="flex h-full flex-col items-center justify-center pt-16 sm:pt-32 px-4">
            <p className="text-base font-semibold text-zinc-400 dark:text-zinc-500">
                404
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Page not found
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <a
                href="/"
                className="mt-4 inline-block px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
                Go back home
            </a>
        </div>
    );
}
