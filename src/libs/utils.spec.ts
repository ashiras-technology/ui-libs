import * as fs from 'fs';
import fsExtra from 'fs-extra';

import { Utils } from './utils';

describe('Utils Tests', () => {
  const utils = new Utils();
  const test_dir = './test-dir-xxxxxxxxxxxxxxxxxx';

  describe('camelCase Method', () => {
    it('for snake case', () => {
      expect(utils.camelCase('aaaa')).toBe('Aaaa');
      expect(utils.camelCase('aaaa-aaaa')).toBe('AaaaAaaa');
      expect(utils.camelCase('aaaa-aaaa-aaaa')).toBe('AaaaAaaaAaaa');
    });

    it('for under bar snake case', () => {
      expect(utils.camelCase('aaaa_aaaa')).toBe('Aaaa_aaaa');
      expect(utils.camelCase('aaaa_aaaa_aaaa')).toBe('Aaaa_aaaa_aaaa');
    });

    it('for "-" case in first caractor', () => {
      expect(utils.camelCase('-aaaa')).toBe('Aaaa');
    });

    it('for "_" case in first caractor', () => {
      expect(utils.camelCase('_aaaa')).toBe('_aaaa');
    });
  });

  describe('underbarSnakeCase Method', () => {
    it('for "-" snake case', () => {
      expect(utils.underbarSnakeCase('aaaa')).toBe('aaaa');
      expect(utils.underbarSnakeCase('aaaa-aaaa')).toBe('aaaa_aaaa');
      expect(utils.underbarSnakeCase('aaaa-aaaa-aaaa')).toBe('aaaa_aaaa_aaaa');
    });

    it('for "-" case in first caractor', () => {
      expect(utils.underbarSnakeCase('-aaaa')).toBe('_aaaa');
    });
  });

  describe('lower Method', () => {
    it('for "-" snake case', () => {
      expect(utils.lower('AAAA')).toBe('aAAA');
      expect(utils.lower('AAAA-AAAA')).toBe('aAAA-AAAA');
    });

    it('for "-" case in first caractor', () => {
      expect(utils.lower('-AAAA')).toBe('-AAAA');
    });

    it('for "_" case in first character', () => {
      expect(utils.lower('_AAAA')).toBe('_AAAA');
    });
  });

  describe('deleteFolderRecursive Method', () => {
    beforeEach(() => {
      fs.mkdirSync(`${test_dir}`);
      fs.mkdirSync(`${test_dir}/test`);
    });

    afterEach(() => {
      fsExtra.remove(`${test_dir}`);
    });

    it('delete directory', () => {
      expect(fs.existsSync(`${test_dir}/test`)).toBe(true);
      utils.deleteFolderRecursive(`${test_dir}`);
      expect(fs.existsSync(`${test_dir}`)).toBe(false);
    });
  });
});
