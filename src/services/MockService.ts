import { Navs, TreeItems } from "@/types";
import { navs } from "./mockData";
import { delay } from "@/helper/delay";
import { generateId } from "@/utils/generateId";

class MockService {
  public navs: Navs;

  constructor(navs: Navs) {
    this.navs = navs;
  }

  async getNavs() {
    await delay(2000);
    return this.navs;
  }

  async getNavById(id: string) {
    await delay(500);
    const nav = this.navs.find((el) => el.id === id);
    return nav;
  }

  async create(items: TreeItems) {
    this.navs.push({ id: generateId(), items });
    await delay(500);
    return true;
  }

  async delete(id: string) {
    this.navs.filter((el) => el.id !== id);
    await delay(500);
    return true;
  }

  async update(id: string, items: TreeItems) {
    this.navs.map((el) => {
      if (el.id === id) {
        return {
          id: el.id,
          items,
        };
      }
      return el;
    });
    await delay(500);

    return true;
  }
}

const mockService = new MockService(navs);

export { mockService };
