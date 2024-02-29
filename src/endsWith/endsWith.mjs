/**
 * 
 * @param {string} str The string to evaluate
 * @param {string} searchString Case sensitive string to search for within the given string
 * @returns {boolean}
 */
export function endsWith(str, searchString) {
    return str.indexOf(searchString, (str.length - searchString.length)) !== -1;
}