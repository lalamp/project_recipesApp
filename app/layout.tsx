import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Recipies App",
  description: "Aplicativo para compartilhar receitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="h-screen">
        <div className="flex h-full flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
      </body>
    </html>
  );
}
