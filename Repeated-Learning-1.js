/**
 * @param {DOM element string} tagName
 * @param {object} styleObject
 * @returns DOM element
 */
 
/**
 * object.keys()는 객체의 key값들을 배열로 반환한다.
 * forEach()는 배열에 있는 요소에 대해 제공된 함수를 처리대로 한번씩 실행한다.
 * for()은 '반복에서' 사용하고 주로 배열된 javascript 문자열이다.
 */

export default function(tagName, styleObject) {
  // DOM API 태그 요소를 얻거나 element로 생성한다.
  const element = document.createElement(tagName);
  // Javascript에서 제공하는 keys() 메서드를 활용해, 간편하게 배열로 가져온다.
  let styleObjectKeyArray = Object.keys(styleObject);
  // 배열에 있는 각 키별로 함수에 '함수를 돌린다'는 이치에서 forEach()를 사용한다.
  // 아래의 forEach() 함수부가 key는 실상 배열의 요소가 된다.
  // 이렇게 되면 각각의 객체키값을 '반복하도록 돕는' 도우미. 사용하는 것은 '반복자(iterator)'라고 한다.
  // 반복자로 이렇게 각각의 '키값을 전달한다'고 표현한다.
  styleObjectKeyArray.forEach((key) => {
    element.style[key] = styleObject[key];
  });
  return element;
}