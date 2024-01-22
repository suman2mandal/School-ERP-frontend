// Import the required libraries
import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Terms of Service</title>
                <meta name="description" content="Terms of Service Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex pb-12 flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Terms of Service
                </h1>

                <p className="mt-3 text-2xl">
                    Please read these Terms of Service carefully before using our website.
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">1. Agreement to Terms</h3>
                        <p className="mt-4 text-xl">
                            By using our website, you agree to be bound by these Terms of Service.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">2. Privacy Policy</h3>
                        <p className="mt-4 text-xl">
                            Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">3. Intellectual Property Rights</h3>
                        <p className="mt-4 text-xl">
                            Explain that your website, application, and its original content, features, and functionality are owned by you and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">4. User Responsibilities</h3>
                        <p className="mt-4 text-xl">
                            Outline the responsibilities and obligations of the user while using your website or application. This could include rules about user behavior, acceptable content, and the consequences of violating these rules.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">5. Termination</h3>
                        <p className="mt-4 text-xl">
                            State under what circumstances you may terminate or suspend the user's access to your website or application.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">6. Governing Law</h3>
                        <p className="mt-4 text-xl">
                            Specify the governing law that will interpret these terms in case of any disputes or lawsuits.
                        </p>
                    </div>

                    <div className="p-6 mt-6 text-left border w-96 rounded-xl">
                        <h3 className="text-2xl font-bold">7. Changes to Terms</h3>
                        <p className="mt-4 text-xl">
                            Reserve your right to modify these terms and provide a notice of changes made.
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
