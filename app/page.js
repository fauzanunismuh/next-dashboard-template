import '@/app/ui/global.css';
// import '@/app/ui/acme-logo'
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
      </div>
      <div className="flex flex-col gap-4 mt-4 grow md:flex-row">
        <div className="flex flex-col justify-center gap-6 px-6 py-10 rounded-lg bg-gray-50 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by devnolife - laboratorium-if-unismuh.
          </p>
          <Link
            href="/login"
            className="flex items-center self-start gap-5 px-6 py-3 text-sm font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Gambar desktop */}
          <img
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block w-full h-auto rounded-md"
          />
          {/* Gambar mobile */}
          <img
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard project showing mobile version"
            className="block md:hidden w-[560px] h-[620px] rounded-md"
          />
        </div>
      </div>
    </main>
  );
}
