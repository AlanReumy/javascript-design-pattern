import { UploadFactory, UploadManager, startUpload } from "../upload-flyweight";

describe("upload-flyweight", () => {
  test("flyWeightObj key nums", () => {
    startUpload("plugin", [
      { fileName: "1.txt", fileSize: 1000 },
      { fileName: "2.txt", fileSize: 2000 },
    ]);

    startUpload("flash", [
      { fileName: "3.txt", fileSize: 1000 },
      { fileName: "4.txt", fileSize: 2000 },
    ]);

    expect(Object.keys(UploadFactory.createdFlyWeightObject).length).toBe(2);
  });
});
