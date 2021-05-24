// 数据模型
class BaseModel {
    constructor(data, message) {
        if ((typeof data) = "string") {
            this.message = data;
            data = null;
            message = null;
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}
// 成功时返回的数据模型
class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.erron = 0;
    }
}
// 失败时返回的数据模型
class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.erron = -1;
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
}