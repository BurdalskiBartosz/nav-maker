import { getNavById } from "@/actions/navs";
import NavCreator from "@/components/NavCreator/NavCreator";
import TitleBarWithButton from "@/components/TitleBarWithButton/TitleBarWithButton";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const data = await getNavById(id);

  return (
    <main className="flex min-h-screen flex-col py-8">
      <TitleBarWithButton buttonLabel="Wróć" href="/">
        Edycja menu
      </TitleBarWithButton>
      <NavCreator id={id} navData={data.items} />
    </main>
  );
};

export default Page;
