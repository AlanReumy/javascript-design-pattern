/* 
  享元模式的关键是如何区别内部状态和外部状态:
    内部状态：存储与对象内部，可以被一些对象共享，通常不会被改变
    外部状态：取决于具体场景，不能被共享
*/

class Upload {
  constructor(uploadType) {
    this.uploadType = uploadType;
  }
}

export class UploadFactory {
  static createdFlyWeightObject = {};
  static create(uploadType) {
    if (this.createdFlyWeightObject[uploadType]) {
      return this.createdFlyWeightObject[uploadType];
    }
    return (this.createdFlyWeightObject[uploadType] = new Upload(uploadType));
  }
}

export class UploadManager {
  static uploadDatabase = {};
  static add(id, uploadType, fileName, fileSize) {
    const flyWeightObj = UploadFactory.create(uploadType);
    this.uploadDatabase[id] = {
      fileName,
      fileSize,
    };
    return flyWeightObj;
  }
  static setExternalState(id, flyWeightObj) {
    const uploadData = this.uploadDatabase[id];
    for (const i in uploadData) {
      flyWeightObj[i] = uploadData[i];
    }
  }
}

export function startUpload(uploadType, files) {
  for (let i = 0, file; (file = files[i++]); ) {
    UploadManager.add(++i, uploadType, file.fileName, file.fileSize);
  }
}
