import Image from "next/image";
import authImg from "../../assets/public/icons/auth-image.svg";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex min-h-screen justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image src={authImg} alt="Auth Img" width={500} height={500} />
        </div>
      </div>
    </main>
  );
}
