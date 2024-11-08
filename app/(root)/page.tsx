import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalancebox";
import RightSidebar from "@/components/RightSidebar";
const Home = () => {
    const loggedIn={firstName: 'Theo', lastName:'Hatz',email:'testemail@hatz.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Acces and manage your account and transactions"
            />
            <TotalBalancebox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
            />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 500}]}

      />
    </section>
  );
};

export default Home;
