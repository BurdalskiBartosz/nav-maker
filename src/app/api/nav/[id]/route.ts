import { navs } from "@/mock/mockData";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const nav = navs.find((el) => el.id === id);

  return Response.json(nav);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  const index = navs.findIndex((nav) => nav.id === id);
  navs.splice(index, 1);

  return Response.json(true);
}
