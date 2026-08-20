import "./globals.css";

export const metadata = {
  title: "Jibbs Login",
  description: "Secure login for Jibbs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
