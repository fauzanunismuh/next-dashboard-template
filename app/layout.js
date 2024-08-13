import '@/app/ui/global.css';
import { lusitana } from './ui/fonts';

// /app/layout.jsx
import "@/app/ui/global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
