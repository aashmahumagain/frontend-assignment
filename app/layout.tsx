import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
type Time = {
  datetime: string;
};
// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const res = await fetch(
//     "https://worldtimeapi.org/api/timezone/America/Chicago",
//     {
//       next: {
//         revalidate: 5,
//       },
//     }
//   );
//   const data: Time = await res.json();
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <h1>{data.datetime}</h1>
//         {children}
//       </body>
//     </html>
//   );
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const res = await fetch(
      "https://worldtimeapi.org/api/timezone/America/Chicago",
      {
        next: {
          revalidate: 5,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data: Time = await res.json();
    console.log(data); // Check the fetched data in the console
    return (
      <html lang="en">
        <body className={inter.className}>
          <h1>{data.datetime}</h1>
          {children}
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error fetching time:", error);
    // Handle the error or display an error message
    return (
      <html lang="en">
        <body>
          <h1 className="font-bold text-3xl">Error fetching time</h1>
          {children}
        </body>
      </html>
    );
  }
}
