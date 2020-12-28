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
                <meta name="description" content="Shannon Clarke" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content="@shannonajclarke" key="twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content={currentURL} key="ogurl" />
                <meta property="og:image" content={previewImage} key="ogimage" />
                <meta property="og:site_name" content={siteName} key="ogsitename" />
                <meta property="og:title" content={pageTitle} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
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