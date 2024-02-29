/**
 * 
 * @param str The string to evaluate
 * @param searchString Case sensitive string to search for within the given string
 */
export function startsWith(str: string, searchString: string): boolean {
    return str.indexOf(searchString) === 0;
}