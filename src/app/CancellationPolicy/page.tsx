// Import the required libraries
import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Cancellation Policy</title>
                <meta name="description" content="Cancellation Policy Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex pb-6 flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Cancellation Policy
                </h1>

                <p className="mt-3 text-2xl">
                    Please read this Cancellation Policy carefully before using our services.
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">1. Agreement to Policy</h3>
                        <p className="mt-4 text-xl">
                            By using our services, you agree to this Cancellation Policy.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">2. Cancellation Window</h3>
                        <p className="mt-4 text-xl">
                            Specify the time frame in which a user can cancel without repercussions (e.g., 24 hours before the appointment).
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">3. Late Cancellation Fee</h3>
                        <p className="mt-4 text-xl">
                            State the penalty when a user cancels outside of the cancellation window (e.g., 50% of the service rate).
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">4. No-Show Policy</h3>
                        <p className="mt-4 text-xl">
                            Explain the consequences if a user does not show up for their appointment without cancelling.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">5. Changes to This Cancellation Policy</h3>
                        <p className="mt-4 text-xl">
                            State that you reserve the right to update or change your Cancellation Policy at any time and you will notify your users about it.
                        </p>
                    </div>
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
