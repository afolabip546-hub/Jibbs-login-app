import type { Metadata } from "next";

export const metadata: Metadata = {
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
