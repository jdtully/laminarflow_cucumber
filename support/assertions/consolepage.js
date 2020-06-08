import assert from "assert";
import searchResultsPage from "../../pages/console";
/**Make sure link  contains  keyword
 *
 * @param {Array.Object } links List of Webdriver.io objects
 * @param {String} keyword Search  keyword
 */
let verifyLinksContains = (keyword) => {
  searchResultsPage.SearchResultsLinks.forEach((link) => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link ${linkText} does not include ${keyword}`
      );
    }
  });
};
export default verifyLinksContains;
