import { Footer, Navbar } from "@/component";
import "./globals.css";

export const metadata = {
  title: "Cur Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
