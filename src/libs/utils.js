"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var fsExtra = tslib_1.__importStar(require("fs-extra"));
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * スネークケースをキャメルケースへ変換する
     */
    Utils.prototype.camelCase = function (str) {
        var moji = str.split('-');
        var o = '';
        moji.forEach(function (element) {
            o = o + element.charAt(0).toUpperCase() + element.slice(1);
        });
        return o;
    };
    /**
     * スネークケースをアンダーバースネークケースへ変換する
     */
    Utils.prototype.underbarSnakeCase = function (str) {
        return str.replace(/-/g, '_');
    };
    /**
     * 先頭文字のみ小文字にする
     */
    Utils.prototype.lower = function (str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    };
    /**
     * ディレクトリの削除
     */
    Utils.prototype.deleteFolderRecursive = function (path) {
        if (fs.existsSync(path)) {
            fsExtra.removeSync(path);
        }
    };
    return Utils;
}());
exports.Utils = Utils;
