/**
 * @param {DOM element string} tagName
 * @param {object} styleObject
 * @returns DOM element
 *
 * object.keys()는 객체의 key값들을 배열로 반환한다.
 * forEach()는 배열의 각 요소에 대해 제공된 함수를 차례대로 한번씩 실행한다.
 * for()문을 "배열에서" 사용하게끔 추상화된 javascript 문법이다.
 */

export default function (tagName, styleObject) {
  const element = document.createElement(tagName);
  let styleObjectKeyArray = Object.keys(styleObject);
  styleObjectKeyArray.forEach((key) => {
    element.style[key] = styleObject[key];
  });
  return element;
}
