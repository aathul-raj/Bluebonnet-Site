import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bluebonnet Assesments & Services",
  description: "Bluebonnet Assessment & Services, LLC, founded by Dr. Kidd, an experienced Bilingual Educational Diagnostician, provides top-quality educational contracted services to school districts in need of special education support. We are dedicated to ensuring students with special needs receive exceptional developmental and learning opportunities while adhering to state and federal guidelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
