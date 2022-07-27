/**
 * Convert an unsorted object made of {key: number} pairs, to a sorted array.
 *
 * @param {Object} targetObject
 * @return {Array}
 */
const convertObjToSortedArr = (targetObject) => Object
  .entries(targetObject)
  .sort(([, x], [, y]) => y - x)
  .reduce((result, [key]) => [...result, key], []);

/**
 * Generate a sorted list of keywords from an articles list.
 *
 * @param {Array} articlesList
 * @return {Array}
 */
const generateKeywordsList = (articlesList) => {
  const keywordsCount = {};

  articlesList
    .map((articleData) => articleData.keyword)
    .forEach((keyword) => {
      if (keywordsCount[keyword]) {
        keywordsCount[keyword] += 1;
        return;
      }

      keywordsCount[keyword] = 1;
    });

  return convertObjToSortedArr(keywordsCount);
};

export {
  convertObjToSortedArr,
  generateKeywordsList,
};
