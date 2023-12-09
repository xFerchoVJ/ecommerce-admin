import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard para manejar tus tiendas y productos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
