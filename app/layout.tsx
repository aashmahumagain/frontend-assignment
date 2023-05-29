import Navbar from "./Common/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // try {
  //   const res = await fetch(
  //     "https://worldtimeapi.org/api/timezone/America/Chicago",
  //     {
  //       next: {
  //         revalidate: 5,
  //       },
  //     }
  //   );
  //   if (!res.ok) {
  //     throw new Error(`HTTP error! Status: ${res.status}`);
  //   }
  //   const data: Time = await res.json();
  //   console.log(data); // Check the fetched data in the console
  //   return (
  //     <html lang="en">
  //       <body className={inter.className}>{children}</body>
  //     </html>
  //   );
  // } catch (error) {
  //   console.error("Error fetching time:", error);
  // }
  // Handle the error or display an error message
  return (
    <html lang="en">
      <body>
        <>
          {/* <h1>asdbas</h1> */}
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
