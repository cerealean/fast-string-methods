import {
  describe,
  expect,
  it,
} from '@jest/globals';

import { startsWith } from './startsWith';

describe('startsWith', () => {
    it.each([
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'Car'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'Car '],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'Ca'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'C'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'Various'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'Va'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'V'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'Variou'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was difficu'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was difficult for Mary to admit that most of her workout consisted of exercising poor'],
    ])('should return true if the string %p starts with the search string %p', (strToEvaluate, searchString) => {
        const actual = startsWith(strToEvaluate, searchString);

        expect(actual).toBe(true);
    });

    it.each([
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'car'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'CAr '],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'Caa'],
        ['Car safety systems have come a long way, but he was out to prove they could be outsmarted.', 'c'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'various'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'Varrious'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'v'],
        ['Various sea birds are elegant, but nothing is as elegant as a gliding pelican.', 'variou'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'it'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was  '],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'Itwas difficu'],
        ['It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.', 'It was difficult for Mary to Admit that most of her Workout consisted of Exercising poor'],
    ])('should return false because %p does not start with the search string %p', (strToEvaluate, searchString) => {
        const actual = startsWith(strToEvaluate, searchString);

        expect(actual).toBe(false);
    });
});
