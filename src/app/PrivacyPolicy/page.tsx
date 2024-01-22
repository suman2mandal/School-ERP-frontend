// Import the required libraries
import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy Policy Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex pb-6 flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Privacy Policy
                </h1>

                <p className="mt-2 text-2xl">
                    Please read this Privacy Policy carefully before using our website.
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">1. Personal Information Collection</h3>
                        <p className="mt-4 text-xl">
                            Explain what personal information you collect from your users (e.g., name, email address, etc.).
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">2. Use of Collected Information</h3>
                        <p className="mt-4 text-xl">
                            Describe how you use the collected information.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">3. Information Sharing and Disclosure</h3>
                        <p className="mt-4 text-xl">
                            State if and how you share the collected information with third parties.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">4. User Rights</h3>
                        <p className="mt-4 text-xl">
                            Explain the rights your users have over their personal data and how they can exercise those rights.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">5. Changes to This Privacy Policy</h3>
                        <p className="mt-4 text-xl">
                            State that you reserve the right to update or change your Privacy Policy at any time and you will notify your users about it.
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
