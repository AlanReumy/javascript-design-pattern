export class MacroCommand {
  constructor() {
    this.commandList = [];
  }
  add(command) {
    this.commandList.push(command);
  }
  execute() {
    this.commandList.forEach((command) => {
      command.execute();
    });
  }
}
