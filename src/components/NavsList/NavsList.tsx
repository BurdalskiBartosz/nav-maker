import { getNavs } from "@/actions/navs";
import Link from "next/link";

const NavsList = async () => {
  const data = await getNavs();

  return (
    <div className="flex flex-col gap-y-4">
      {data?.map((el) => {
        return (
          <Link key={el.id} href={`/navigation-creator/${el.id}`}>
            {el.id}
          </Link>
        );
      })}
    </div>
  );
};

export default NavsList;
