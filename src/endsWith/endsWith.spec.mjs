import {
    describe,
    expect,
    it,
  } from '@jest/globals';
import { endsWith } from './endsWith.mjs';

const testSentence1 = 'Car safety systems have come a long way, but he was out to prove they could be outsmarted.';
const testSentence2 = 'Various sea birds are elegant, but nothing is as elegant as a gliding pelican.';
const testSentence3 = 'It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.';

describe('endsWith', () => {
    it.each([
        [testSentence1, 'outsmarted.'],
        [testSentence1, ' outsmarted.'],
        [testSentence1, 'ted.'],
        [testSentence1, '.'],
        [testSentence2, 'pelican.'],
        [testSentence2, 'n.'],
        [testSentence2, 'lican.'],
        [testSentence2, 'a gliding pelican.'],
        [testSentence3, 'judgment.'],
        [testSentence3, 't.'],
        [testSentence3, 'exercising poor judgment.'],
        [testSentence3, testSentence3],
    ])('should return true if the string %p ends with the search string %p', (strToEvaluate, searchString) => {
        const actual = endsWith(strToEvaluate, searchString);

        expect(actual).toBe(true);
    });

    it.each([
        [testSentence1, 'outsmarted'],
        [testSentence1, ' outsmarted. '],
        [testSentence1, 'ated.'],
        [testSentence1, 'Car'],
        [testSentence1, '..'],
        [testSentence2, 'lIcAn.'],
        [testSentence2, ' n.'],
        [testSentence2, '  lican.'],
        [testSentence2, 'a  gliding pelican.'],
        [testSentence3, '  judgment.'],
        [testSentence3, 'T.'],
        [testSentence3, 'eXercising poor judgmenT.'],
        [testSentence3, testSentence3 + 'a'],
    ])('should return false if the string %p does not end with the search string %p', (strToEvaluate, searchString) => {
        const actual = endsWith(strToEvaluate, searchString);

        expect(actual).toBe(false);
    });
});