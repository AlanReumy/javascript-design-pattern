import { MacroCommand } from "../macro-command";

describe("macro-command", () => {
  test("command count", () => {
    let closeDoorCount = 0;
    let openPcCount = 0;

    const closeDoorCommand = {
      execute() {
        ++closeDoorCount;
      },
    };

    const openPcCommand = {
      execute() {
        ++openPcCount;
      },
    };

    const macroCommand = new MacroCommand();
    macroCommand.add(openPcCommand);
    macroCommand.add(closeDoorCommand);
    macroCommand.execute();

    expect(closeDoorCount).toBe(1);
    expect(openPcCount).toBe(1);
  });
});
