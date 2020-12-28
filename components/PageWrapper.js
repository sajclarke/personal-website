import React, { useState } from 'react';
import Head from 'next/head'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

// import QuoteForm from './forms/QuoteForm'

const PageWrapper = ({ children, currentURL, twitterName, previewImage, siteName, pageTitle, description }) => {

    const [isModalOpen, toggleModal] = useState(false)

    return (
        <div className="font-custom flex flex-col w-full h-screen">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="barbados, church" />
                <meta name="author" content="Shannon Clarke" />
                <meta name="title" content="Hi, I'm Shannon Clarke. I am passionate about utilizing technology to empower individuals and build communities" />
                <meta name="description" content="I believe in a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life." />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://shannonclarke.com/" />
                <meta property="og:title" content="Hi, I'm Shannon Clarke. I am passionate about utilizing technology to empower individuals and build communities" />
                <meta property="og:description" content="I believe in a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life." />
                <meta property="og:image" content="" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://shannonclarke.com/" />
                <meta property="twitter:title" content="Hi, I'm Shannon Clarke. I am passionate about utilizing technology to empower individuals and build communities" />
                <meta property="twitter:description" content="I believe in a future where modern technology solutions are actively developed by the Caribbean to improve our quality of life." />
                <meta property="twitter:image" content="" />
                <meta name="twitter:creator" content="@shannonajclarke" key="twhandle" />


                {/* General Stuff */}
                <title>Shannon Clarke</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <main className="flex flex-col flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default PageWrapper;