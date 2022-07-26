export class RefreshMenuCommand {
  constructor(recevier) {
    this.recevier = recevier;
  }
  execute() {
    this.recevier.refresh();
  }
}

export class AddSubMenuCommand {
  constructor(recevier) {
    this.recevier = recevier;
  }
  execute() {
    this.recevier.add();
  }
}
