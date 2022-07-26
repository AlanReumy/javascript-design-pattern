import { RefreshMenuCommand, AddSubMenuCommand } from "../command";

describe("command", () => {
  test("command count", () => {
    let refreshCount = 0;
    let addCount = 0;
    const Menu = {
      refresh() {
        ++refreshCount;
      },
    };

    const SubMenu = {
      add() {
        ++addCount;
      },
    };

    const refreshMenuCommand = new RefreshMenuCommand(Menu);
    const addSubMenuCommand = new AddSubMenuCommand(SubMenu);

    refreshMenuCommand.execute();
    addSubMenuCommand.execute();

    expect(refreshCount).toBe(1);
    expect(addCount).toBe(1);
  });
});
