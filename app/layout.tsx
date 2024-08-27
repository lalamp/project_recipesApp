import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";

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
        <AuthProvider>
          <div className="flex flex-col h-screen">
              {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
