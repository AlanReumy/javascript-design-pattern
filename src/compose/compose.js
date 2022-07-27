export class Folder {
  constructor(name) {
    this.files = [];
    this.name = name;
  }
  add(file) {
    this.files.push(file);
  }
  scan() {
    console.log("begin scan folder: " + this.name);
    this.files.forEach((file) => {
      file.scan();
    });
  }
}

export class File {
  constructor(name) {
    this.name = name;
  }
  add() {
    throw new Error("can not add file under file");
  }
  scan() {
    console.log("begin scan file: " + this.name);
  }
}
