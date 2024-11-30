import Loader from "@/components/Loader/Loader";
import NavsList from "@/components/NavsList/NavsList";
import Link from "next/link";
import { Suspense } from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col py-8">
      <Link href="/navigation-creator">Create</Link>
      <Suspense fallback={<Loader />}>
        <NavsList />
      </Suspense>
    </main>
  );
};

export default Home;
