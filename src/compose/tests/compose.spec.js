import { File, Folder } from "../compose";

describe("compose", () => {
  test("compose", () => {
    const folder = new Folder("学习资料");
    const folder1 = new Folder("计算机网络");
    const folder2 = new Folder("javascript");

    const file1 = new File("图解http");
    const file2 = new File("计算机网路自顶向下");
    const file3 = new File("你不知道的js");

    folder.add(folder1);
    folder.add(folder2);

    folder1.add(file1);
    folder1.add(file2);

    folder2.add(file3);

    expect(folder.files[0].name).toBe(folder1.name);
    expect(folder.files[1].name).toBe(folder2.name);
    expect(folder.files[0].files[0].name).toBe(file1.name);
    expect(folder.files[1].files[0].name).toBe(file3.name);
  });
});
