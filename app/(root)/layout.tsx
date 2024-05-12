import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import logo from "../../assets/public/icons/logo.svg";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="root-layout">
        <Image src={logo} height={30} width={30} alt="logo" />
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </main>
  );
}
