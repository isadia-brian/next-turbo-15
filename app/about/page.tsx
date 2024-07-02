/// <reference types="react/canary"/>

import Link from "next/link";

const anchors = [
  ["/", "Home"],
  ["/about", "About"],
  ["/contact", "Contact"],
];

const About = () => {
  return (
    <div>
      <button
        popoverTarget='nav'
        className='fixed right-4 top-4 w-9 h-9 flex items-center justify-center text-xl rounded-full border-2 border-white p-2'>
        <span className='sr-only'>Show navigation</span>
        🍔
      </button>
      <nav
        id='nav'
        popover=''
        className='main-nav h-full w-full place-items-center bg-transparent p-0 text-4xl text-white'>
        <button
          popoverTarget='nav'
          className='absolute z-10 right-4 top-4 w-9 h-9 flex items-center justify-center text-xl rounded-full border-2 border-white p-2'>
          <span className='sr-only'>Hide navigation</span>❌
        </button>
        <div className='relative flex flex-col gap-6 text-4xl'>
          {anchors.map(([href, text], idx) => (
            <Link href={href} className='relative block text-center' key={idx}>
              {text}
            </Link>
          ))}
        </div>
      </nav>
      <section className='grid min-h-screen place-content-center text-4xl'>
        Just one more z-index
      </section>
      <section className='grid min-h-screen place-content-center text-4xl'>
        More website content
      </section>
    </div>
  );
};

export default About;
