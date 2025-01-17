
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import "./globals.css";
import Providers from "@/components/theme-provider";
import '@ant-design/v5-patch-for-react-19';
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontSerif = Inria_Serif({
  weight:["300", "400", "700"],
  subsets: ["latin"], 
  variable: "--font-serif"
});


export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: "Things to do | Find fun things to do",
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      signOgImageUrl({
        title: config.blog.name,
      }),
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased m-auto",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <Providers
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          <main>
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
            </main>
        </Providers>
      </body>
    </html>
  );
}
