import { Crimson_Text, Teachers } from "next/font/google";
import "./globals.css";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tri R Foods",
  description: "Tri R Foods International Inc. is a leading supplier of high-quality food products.",
  icons:{
    icon:['images/favicon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${crimson.variable} ${teachers.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
