import { delay } from "@/helper/delay";
import { navs } from "@/services/mockData";
import { generateId } from "@/utils/generateId";

export async function GET() {
  await delay(2000);
  return Response.json(navs);
}

export async function POST(req: Request) {
  const data = await req.json();
  navs.push({ id: generateId(), items: data });
  await delay(500);
  return Response.json(true);
}
