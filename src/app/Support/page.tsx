// Import the required libraries
import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Customer Support</title>
                <meta name="description" content="Customer Support Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to our Customer Support
                </h1>

                <p className="mt-3 text-2xl">
                    Get started by contacting us at {' '}
                    <code className="p-3 mt-2 font-mono text-lg bg-gray-100 rounded-md">
                        suman.mandal@zohomail.in
                    </code>
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a href="mailto:suman.mandal@zohomail.in" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Contact us →</h3>
                        <p className="mt-4 text-xl">
                            Find in-depth information about our services.
                        </p>
                    </a>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <a
                    className="flex items-center justify-center"
                    href="https://www.sumanmandal.online"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by {' '}
                    <img src="/logo.svg" alt="Logo" className="h-4 ml-2" />
                </a>
            </footer>
        </div>
    )
}
