import * as fs from 'fs';
import * as yaml from 'js-yaml';

import { Entities, Dictionarys, Domains, Contents, UI } from 'ui-models/src/models';

export type Templates = Entities | Dictionarys | Domains | Contents | UI;

export class File {
  /**
   * 指定されたパスの Yaml ファイルを読み込みます。
   */
  loadYaml<T>(filename: string): T {
    const yamlText = fs.readFileSync(filename, 'utf8');
    return yaml.safeLoad(yamlText);
  }

  /**
   * ファイルへの出力
   */
  out(path: string, data: string): void {
    fs.appendFileSync(path, `${data}\n`);
  }

  /**
   * ディレクトリ内にあるyamlファイル検索
   * パスは実行時のカレントディレクトリ
   */
  list(path: string): string[] {
    const files = fs.readdirSync(path);
    return files.filter((file) => {
      const filePath = `${path}/${file}`;
      return fs.statSync(filePath).isFile() && /.*\.yaml$/.test(filePath); //絞り込み
    });
  }
}
