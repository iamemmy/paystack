import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next.js Shopping Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 w-full h-screen flex justify-center items-center">
        <div className="container mx-auto py-8 w-[85%] lg:w-[40%] flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8">Welcome to Our Shop</h1>

          <Link href="/payment" className='bg-blue-500 px-3 py-2 rounded-md text-white'>Go to payments</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
