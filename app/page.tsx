import { Suspense } from "react";
import { getPageData } from "@/actions/query";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const query = `
  {
    pageCollection {
      items {
        title
        logo {
          url
        }
      }
    }
  }
  `;

  const pageData = await getPageData(query);

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Suspense fallback={<p>Loading...</p>}>
          <div className='flex flex-col items-center space-y-7'>
            <div className='relative h-16 md:h-20 lg:h-40 aspect-square  '>
              <Image
                src={pageData.logo.url}
                fill
                alt='logo'
                className='object-cover'
                quality={90}
                sizes='(max-width:1023px) 100vw, 160px'
                priority
              />
            </div>
            <p className='text-xl lg:text-4xl font-bold text-center '>{pageData.title}</p>
          </div>
        </Suspense>

        <div className='flex items-center'></div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          <Image aria-hidden src='/file-text.svg' alt='File icon' width={16} height={16} />
          Learn
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          <Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
          Examples
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          <Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
          Go to nextjs.org →
        </a>
        <Link href={"/about"}>About →</Link>
      </footer>
    </div>
  );
}
