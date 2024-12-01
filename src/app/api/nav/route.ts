import { delay } from "@/helper/delay";
import { navs } from "@/mock/mockData";
import { generateId } from "@/utils/generateId";

export async function GET() {
  await delay(300);
  return Response.json(navs);
}

export async function POST(req: Request) {
  const { items, id } = await req.json();

  if (id) {
    const index = navs.findIndex((nav) => nav.id === id);
    navs[index] = {
      id,
      items,
    };
  } else {
    navs.push({ id: generateId(), items });
  }
  return Response.json(true);
}
