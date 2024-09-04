import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Contact />
      </body>
    </html>
  );
}
