import { delay } from "@/helper/delay";
import { navs } from "@/services/mockData";
import { generateId } from "@/utils/generateId";

export async function GET() {
  await delay(2000);
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
  await delay(500);
  return Response.json(true);
}
