class TitleManager {
  /**
   * @param {string} tagName
   * @param {object} stateDataObject
   * stateDataObject 매개변수는 값이 대입되지 않았을 때를 대비하도록 기본값을 설정해두었다.
   * default parameter 라고 부른다.
   */

  constructor(tagName, stateDataObject = {basicTitle: "기본 제목", newTitle: "새로운 제목"}) {
    this._tagName = tagName;
    this._stateData = stateDataObject;
  }

  get tagName() {
    return this._tagName;
  }

  set tagName(value) {
    if (typeof value === 'string' && value.trim() !== '') {
      this._tagName = value;
    } else {
      throw new Error("유효한 태그 이름이 아닙니다.");
    }
  }

  get stateData() {
    return this._stateDataObject;
  }
  set stateDataObject(value) {
    const isValidObject = (obj) => (typeof obj === 'object' && obj !== null);

    if (isValidObject(value)) {
      this._stateDataObject = value;
    } else {
      throw new Error("유효한 객체가 아닙니다.");
    }
  }

  updateUI() {
    const elements = document.getElementsByTagName(this._tagName);
    if (elements.length > 0) {
      elements[0].textContent = this._stateDataObject.basicTitle;
    } else {
      throw new Error("지정된 태그 이름의 요소를 찾을 수 없습니다.");
    }
  }

  updateTitle() {
    this._stateDataObject.basicTitle = this._stateDataObject.newTitle;
    this.updateUI();
  }

}

const test = new TitleManager("h1", {basicTitle: "기본 제목", newTitle: "새로운 제목"});

console.dir(test);
console.log(test.tagName);