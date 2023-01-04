import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

interface Props {
  children?: React.ReactNode;
}

const NotFoundIndex: NextPage<Props> = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-start items-center">
        <main className="max-w-screen-lg w-full relative p-4 sm:p-6 md:p-8 flex flex-col items-center justify-between">
          <Head>
            <title>Quentin Picault | Page Not Found</title>
          </Head>
          <div className="container flex flex-col items-center justify-center my-6">
            <h1 className="font-bold text-white text-7xl md:text-9xl mt-36">404</h1>
            <p className=" text-white text-lg">{`This page doesn't exist :'(`}</p>
            <a className="navlink hover:navlink-hover mt-8" href="/">Go to Home</a>
          </div>
        </main>
      </div>
    </>
  ) 
}

export default NotFoundIndex;