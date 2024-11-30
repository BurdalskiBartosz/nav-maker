import NavCreator from "@/components/NavCreator/NavCreator";
import TitleBarWithButton from "@/components/TitleBarWithButton/TitleBarWithButton";

const Page = async () => {
  return (
    <main className="flex min-h-screen flex-col py-8">
      <TitleBarWithButton buttonLabel="Wróć" href="/">
        Tworzenie menu
      </TitleBarWithButton>
      <NavCreator />
    </main>
  );
};

export default Page;
