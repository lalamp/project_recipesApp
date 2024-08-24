import type { Metadata } from "next";
import "./globals.css";

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
        <div className="flex flex-col h-screen">
            {children}
        </div>
      </body>
    </html>
  );
}
