/**
 * 
 * @param {string} str The string to evaluate
 * @param {string} searchString Case sensitive string to search for within the given string
 * @returns {boolean}
 */
export function endsWith(str, searchString) {
    const index = str.indexOf(searchString);
    return index !== -1 && index === (str.length - searchString.length);
}