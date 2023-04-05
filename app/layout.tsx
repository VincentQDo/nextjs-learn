import "./globals.css";

export const metadata = {
  title: "Blog test app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <p>Hello world here</p>
        {children}
      </body>
    </html>
  );
}