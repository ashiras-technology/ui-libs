import * as fs from 'fs';
import * as fsExtra from 'fs-extra';

export class Utils {
  /**
   * スネークケースをキャメルケースへ変換する
   */
  camelCase(str: string): string {
    const moji = str.split('-');
    let o = '';
    moji.forEach((element) => {
      o = o + element.charAt(0).toUpperCase() + element.slice(1);
    });
    return o;
  }

  /**
   * スネークケースをアンダーバースネークケースへ変換する
   */
  underbarSnakeCase(str: string): string {
    return str.replace(/-/g, '_');
  }

  /**
   * 先頭文字のみ小文字にする
   */
  lower(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  /**
   * ディレクトリの削除
   */
  deleteFolderRecursive(path: string): void {
    if (fs.existsSync(path)) {
      fsExtra.removeSync(path);
    }
  }
}
