/**
 * 
 * @param str The string to evaluate
 * @param searchString Case sensitive string to search for within the given string
 */
export function endsWith(str: string, searchString: string) {
    return str.indexOf(searchString, (str.length - searchString.length)) !== -1;
}