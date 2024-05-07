import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import logo from "../../assets/public/icons/logo.svg";
import MobileNav from "@/components/MobileNav";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Mithun", lastName: "Naik" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div>
        <div className="root-layout">
          <Image src={logo} height={30} width={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
