import { getNavs } from "@/actions/navs";
import EmptyStateInfoBox from "../EmptyStateInfoBox/EmptyStateInfoBox";
import GoToNavigation from "../GoToNavigation/GoToNavigation";

const NavsList = async () => {
  const data = await getNavs();

  return (
    <div className="flex flex-col gap-y-4">
      {data.length === 0 && (
        <EmptyStateInfoBox
          title="Lista nawigacji jest pusta"
          buttonLabel="Dodaj nowe menu"
          href="/navigation-creator"
        />
      )}
      {data?.map((el) => <GoToNavigation key={el.id} data={el} />)}
    </div>
  );
};

export default NavsList;
