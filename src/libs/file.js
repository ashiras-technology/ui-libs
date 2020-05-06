"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var yaml = tslib_1.__importStar(require("js-yaml"));
var File = /** @class */ (function () {
    function File() {
    }
    /**
     * 指定されたパスの Yaml ファイルを読み込みます。
     */
    File.prototype.loadYaml = function (filename) {
        var yamlText = fs.readFileSync(filename, 'utf8');
        return yaml.safeLoad(yamlText);
    };
    /**
     * ファイルへの出力
     */
    File.prototype.out = function (path, data) {
        fs.appendFileSync(path, data + "\n");
    };
    /**
     * ディレクトリ内にあるyamlファイル検索
     * パスは実行時のカレントディレクトリ
     */
    File.prototype.list = function (path) {
        var files = fs.readdirSync(path);
        return files.filter(function (file) {
            var filePath = path + "/" + file;
            return fs.statSync(filePath).isFile() && /.*\.yaml$/.test(filePath); //絞り込み
        });
    };
    return File;
}());
exports.File = File;
