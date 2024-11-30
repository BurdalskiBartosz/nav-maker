import { Suspense } from "react";
import NavsListSkeletonLoader from "@/components/Loaders/NavsListSkeletonLoader/NavsListSkeletonLoader";
import NavsList from "@/components/NavsList/NavsList";
import TitleBarWithButton from "@/components/TitleBarWithButton/TitleBarWithButton";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col py-8">
      <TitleBarWithButton
        buttonLabel="Dodaj nowe menu"
        href="/navigation-creator"
      >
        Lista nawigacji
      </TitleBarWithButton>
      <Suspense fallback={<NavsListSkeletonLoader />}>
        <NavsList />
      </Suspense>
    </main>
  );
};

export default Home;
