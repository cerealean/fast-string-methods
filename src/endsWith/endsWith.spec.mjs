import {
    describe,
    expect,
    it,
  } from '@jest/globals';
import { endsWith } from './endsWith.mjs';

const testSentence1 = 'Car safety systems have come a long way, but he was out to prove they could be outsmarted.';
const testSentence2 = 'Various sea birds are elegant, but nothing is as elegant as a gliding pelican.';

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
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'judgment.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 't.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'exercising poor judgment.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.'],
    ])('should return true if the string %p ends with the search string %p', (strToEvaluate, searchString) => {
        const actual = endsWith(strToEvaluate, searchString);

        expect(actual).toBe(true);
    });
});