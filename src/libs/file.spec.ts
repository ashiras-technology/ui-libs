import * as fs from 'fs';
import fsExtra from 'fs-extra';

import { File } from './file';
import { Entities } from 'ui-models/src/models';

describe('File Tests', () => {
  const file = new File();
  const test_dir = 'test-dir';
  const fileName = 'testData-xxxxxxxxxx.yaml';

  describe('loadYaml Method', () => {
    const yamlTestData = `entities:  
  - name: "加入サービス有無"
    id: "subscribed-service-flag"
    type: "boolean"
    desc: "true: 有, false: 無"
  - name: "加入サービス"
    id: "subscribed-service"
    type: "string"
`;
    const jsonTestData: Entities = {
      entities: [
        {
          desc: 'true: 有, false: 無',
          id: 'subscribed-service-flag',
          name: '加入サービス有無',
          type: 'boolean',
        },
        {
          id: 'subscribed-service',
          name: '加入サービス',
          type: 'string',
        },
      ],
    };

    beforeEach(() => {
      fs.writeFileSync(fileName, yamlTestData);
    });

    it('Loading YAML', () => {
      expect(file.loadYaml(fileName)).toEqual(jsonTestData);
    });

    afterEach(() => {
      fs.unlinkSync(fileName);
    });
  });

  describe('out Method', () => {
    beforeEach(() => {
      fs.writeFileSync(fileName, '** Test **: ');
    });

    it('out execute', () => {
      file.out(fileName, 'out execute');
      expect(fs.readFileSync(fileName, 'utf8')).toEqual(`** Test **: out execute\n`);
    });

    afterEach(() => {
      fs.unlinkSync(fileName);
    });
  });

  describe('list Method', () => {
    beforeEach(() => {
      fs.mkdirSync(`${test_dir}`);
      fs.writeFileSync(`${test_dir}/test.yaml`, '** Test ** yaml');
      fs.writeFileSync(`${test_dir}/test2.yaml`, '** Test ** yaml');
      fs.writeFileSync(`${test_dir}/test.dummy`, '** Test ** yaml');
    });

    it('out execute', () => {
      expect(file.list(test_dir).length).toBe(2);
    });

    afterEach(() => {
      fsExtra.remove(`${test_dir}`);
    });
  });
});
