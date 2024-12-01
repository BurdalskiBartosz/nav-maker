import { navs } from "@/services/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const nav = navs.find((el) => el.id === id);

  return Response.json(nav);
}
