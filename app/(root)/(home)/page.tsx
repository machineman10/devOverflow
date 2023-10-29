import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
