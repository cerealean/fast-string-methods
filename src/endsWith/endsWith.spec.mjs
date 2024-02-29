import {
    describe,
    expect,
    it,
  } from '@jest/globals';
import { endsWith } from './endsWith.mjs';

describe('endsWith', () => {
    it.each([
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'outsmarted.'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', ' outsmarted.'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'ted.'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', '.'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'pelican.'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'n.'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'lican.'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'a gliding pelican.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'judgment.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 't.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'exercising poor judgment.'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.'],
    ])('should return true if the string %p ends with the search string %p', (strToEvaluate, searchString) => {
        const actual = endsWith(strToEvaluate, searchString);

        expect(actual).toBe(true);
    });
});