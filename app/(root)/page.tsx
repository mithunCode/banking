import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import Totalbalancebox from "@/components/Totalbalancebox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Mithun",
    lastName: "Naik",
    email: "mithunnaik@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your Account and transactions efficiently"
          />
          <Totalbalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
        Recent Transaction
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;
