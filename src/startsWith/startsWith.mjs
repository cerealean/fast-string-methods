/**
 * 
 * @param {string} str The string to evaluate
 * @param {string} searchString Case sensitive string to search for within the given string
 * @returns 
 */
export function startsWith(str, searchString) {
    return str.indexOf(searchString) === 0;
}