import '@/app/ui/global.css';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-100">
      <header className="relative flex items-center justify-center h-72 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-b-lg shadow-lg overflow-hidden">
        {/* Gambar Logo Acme */}
        <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md" />
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate__animated animate__fadeIn animate__delay-1s">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_Universitas_Muhammadiyah_Makassar_Resmi.jpg"
            alt="Acme Logo"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </header>
      <div className="flex flex-col gap-8 mt-8 md:flex-row md:justify-center md:gap-12">
        <div className="flex flex-col justify-center gap-6 px-6 py-10 bg-white rounded-lg shadow-lg md:w-1/2 md:px-12 animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-xl text-gray-800 md:text-2xl md:leading-relaxed">
            <strong>Selamat Datang di Acme!</strong> Saya dengan bangga mempersembahkan Web Acme, sebagai praktikum dalam mempelajari  {' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500 hover:underline">
            Next.js 
            </a>
             yang dirancang untuk memandu Anda melalui perjalanan pembelajaran yang menarik. praktikum ini diimplementasikan oleh laboratorium Informatika di Fakultas Teknik Universitas Muhammadiyah Makassar.
          </p>
          <Link
            href="/login"
            className="flex items-center self-start gap-3 px-6 py-3 text-base font-medium text-white transition-transform transform bg-blue-600 rounded-lg hover:bg-blue-500 hover:scale-105 md:text-lg"
          >
            <span>Log in</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-1/2">
          {/* Gambar desktop */}
          <img
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block w-full h-auto rounded-lg shadow-lg"
          />
          {/* Gambar mobile */}
          <img
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard project showing mobile version"
            className="block md:hidden w-[560px] h-[620px] rounded-lg shadow-lg"
          />
        </div>
      </div>
      <section className="flex flex-col items-center gap-6 mt-12">
  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg md:w-1/2">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
    <img
      src="https://ik.imagekit.io/imgFar/WhatsApp%20Image%202024-08-07%20at%2012.11.09.jpeg?updatedAt=1723662844040"
      alt="Fauzan Azhari Rahman"
      className="w-36 h-36 rounded-full border-4 border-gray-300 shadow-xl mb-4"
    />
    <p className="text-lg text-gray-700 mb-2"><strong>Name:</strong> Fauzan Azhari Rahman</p>
    <p className="text-lg text-gray-700 mb-2"><strong>NIM:</strong> 105841109622</p>
    <p className="text-lg text-gray-700 mb-2"><strong>Class:</strong> 4C</p>
    <a
      href="https://fauzanazhari.github.io/web-profil"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
    >
      About Me
    </a>
  </div>
</section>

      <footer className="flex flex-col items-center mt-8 py-6 border-t border-gray-300 text-gray-600">
        <p className="text-sm">
          © 2024 by <strong>Dev Fauzan Azhari Rahman</strong>
        </p>
      </footer>
    </main>
  );
}