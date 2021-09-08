const arr = [
  {
    id: 0,
    domStructure: "",
    cssStructure: "",
    description: "",
  },
  {
    id: 1,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
    <p>This is a text4.</p>
    <span>This is a span.</span>
  </div>
    `,
    cssSelector: `.example-area *`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  .example-area *{
    color: #f00;
  }
    `,
    description: `匹配任何元素。`,
  },
  {
    id: 2,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
    <p>This is a text4.</p>
  </div>
    `,
    cssSelector: `p`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  p {
    color: #00f;
  }
    `,
    description: `匹配所有 p 標籤的元素。`,
  },
  {
    id: 3,
    domStructure: `  
  <div class="example-area">
    <p title="p tag.">This is a text1.</p>
    <p>This is a text2.</p>
    <p title="p tag.">This is a text3.</p>
    <p>This is a text4.</p>
    <a href="#" title="a tag.">This is a link.</a>
  </div>
    `,
    cssSelector: `p[title]`,
    cssStyle: `color: #f0f;`,
    cssStructure: `
  p[title] {
    color: #f0f;
  }
    `,
    description: `匹配 p 標籤中具有 title 屬性的元素`,
  },
  {
    id: 4,
    domStructure: `  
  <div class="example-area">
    <p class="color-style">This is a text1.</p>
    <p class="font-style">This is a text2.</p>
    <p class="color-style">This is a text3.</p>
    <p class="font-style">This is a text4.</p>
  </div>
    `,
    cssSelector: `p[class="font-style"]`,
    cssStyle: `font-size: 26px;`,
    cssStructure: `
  p[class="font-style"] {
    font-size: 20px;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值等於 font-style 的元素。`,
  },
  {
    id: 5,
    domStructure: `  
  <div class="example-area">
    <p class="color-style font-style">This is a text1.</p>
    <p class="font-style">This is a text2.</p>
    <p class="color-style font-style">This is a text3.</p>
    <p>This is a text4.</p>
  </div>
    `,
    cssSelector: `p[class~="font-style"]`,
    cssStyle: `font-size: 26px;`,
    cssStructure: `
  p[class~="font-style"] {
    font-size: 20px;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值等於 font-style 的元素，包括以空格分隔屬性值為  font-style 的元素。`,
  },
  {
    id: 6,
    domStructure: `  
  <div class="example-area">
    <p class="color-style">This is a text1.</p>
    <p>This is a text2.</p>
    <p class="font-style">This is a text3.</p>
  </div>
    `,
    cssSelector: `p[class^="color"]`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p[class^="color"] {
    color: #f00;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值開頭為 color 的元素。`,
  },
  {
    id: 7,
    domStructure: `  
  <div class="example-area">
    <p class="text-color">This is a text1.</p>
    <p>This is a text2.</p>
    <p class="color-style">This is a text3.</p>
  </div>
    `,
    cssSelector: `p[class$="color"]`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p[class$="color"] {
    color: #f00;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值結尾為 color 的元素。`,
  },
  {
    id: 8,
    domStructure: `  
  <div class="example-area">
    <p class="text-color">This is a text1.</p>
    <p>This is a text2.</p>
    <p class="color-style">This is a text3.</p>
  </div>
    `,
    cssSelector: `p[class*="lor"]`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p[class*="lor"] {
    color: #f00;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值包含 lor 文字的元素。`,
  },
  {
    id: 9,
    domStructure: `  
  <div class="example-area">
    <p class="text-color-style">This is a text1.</p>
    <p class="color">This is a text2.</p>
    <p class="color-style">This is a text3.</p>
  </div>
    `,
    cssSelector: `p[class|="color"]`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p[class|="color"] {
    color: #f00;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值包含零或多個連字號(-)且以左起開始值為 color 的元素。`,
  },
  {
    id: 10,
    domStructure: ``,
    cssSelector: `:root`,
    cssStyle: `background: #f00;`,
    cssStructure: `
  :root {
    background: #f00;
  }
    `,
    description: `匹配 E 為根元素的元素，在 HTML 通常為 <htmlL> 元素。`,
  },
  {
    id: 11,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
    <p>This is a text4.</p>
    <p>This is a text5.</p>
  </div>
    `,
    cssSelector: `p:nth-child(2n+1)`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:nth-child(2n+1) {
    color: #00f;
  }
    `,
    description: `匹配 p 標籤中符合 2n+1 規則的元素，此為第1個、第3個及第5個。`,
  },
  {
    id: 12,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
    <p>This is a text4.</p>
    <p>This is a text5.</p>
  </div>
    `,
    cssSelector: `p:nth-last-child(2)`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:nth-last-child(2) {
    color: #00f;
  }
    `,
    description: `匹配 p 標籤的倒數第二個元素`,
  },
  {
    id: 13,
    domStructure: `  
  <div class="example-area">
    <span>This is a span.</span>
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <span>This is a span.</span>
    <p>This is a text3.</p>
    <p>This is a text4.</p>
    <span>This is a span.</span>
    <p>This is a text5.</p>
  </div>
    `,
    cssSelector: `p:nth-of-type(2n+1)`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:nth-of-type(2n+1) {
    color: #00f;
  }
    `,
    description: `匹配 p 標籤，且符合 2n+1 規則的元素。`,
  },
  {
    id: 14,
    domStructure: `  
  <div class="example-area">
    <span>This is a span.</span>
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <span>This is a span.</span>
    <p>This is a text3.</p>
    <p>This is a text4.</p>
    <span>This is a span.</span>
    <p>This is a text5.</p>
  </div>
    `,
    cssSelector: `p:nth-last-of-type(2)`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:nth-last-of-type(2) {
    color: #00f;
  }
    `,
    description: `匹配 p 標籤的倒數第二個元素。`,
  },
  {
    id: 15,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `p:first-child`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:first-child {
    color: #00f;
  }
    `,
    description: `匹配兄弟節點，p 標籤為第ㄧ個子元素的元素。`,
  },
  {
    id: 16,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `p:last-child`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:last-child {
    color: #00f;
  }
    `,
    description: `匹配兄弟節點 p 標籤為最後ㄧ個子元素的元素。`,
  },
  {
    id: 17,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <span>This is a span.</span>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `p:first-of-type`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:first-of-type {
    color: #00f;
  }
    `,
    description: `匹配 p 標籤的第一個元素。`,
  },
  {
    id: 18,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <span>This is a span.</span>
    <p>This is a text2.</p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `p:last-of-type`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:last-of-type {
    color: #00f;
  }
    `,
    description: `匹配 p 標籤的最後一個元素。`,
  },
  {
    id: 19,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <span>This is a span.</span>
    <p>This is a text2.
      <span>This is inner span.</span>
    </p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `span:only-child`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  span:only-child {
    color: #00f;
  }
    `,
    description: `匹配 span 標籤中沒有兄弟節點的元素。`,
  },
  {
    id: 20,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <span>This is a span.</span>
    <span>This is a span.</span>
    <p>This is a text2.
      <span>This is inner span.</span>
    </p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `span:only-of-type`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  span:only-of-type {
    color: #00f;
  }
    `,
    description: `匹配兄弟節點中沒有其他相同元素名稱的 span 標籤。`,
  },
  {
    id: 21,
    domStructure: `  
  <div class="example-area">
    <p>This is a text1.</p>
    <span>This is a span.</span>
    <span>This is a span.</span>
    <p></p>
    <p>This is a text3.</p>
  </div>
    `,
    cssSelector: `p:empty`,
    cssStyle: `background: #f00; width: 348px;height: 10px;`,
    cssStructure: `
  p:empty {
    background: #00f;
    width: 348px;
    height: 10px;
  }
    `,
    description: `匹配 ｐ 標籤中沒有子元素(其他節點)的元素。`,
  },
  {
    id: 22,
    domStructure: `  
  <div class="example-area">
    <a href="#target">target</a>
    <p id="target">text1.</p>
  </div>
    `,
    cssSelector: `example-area`,
    cssStyle: ``,
    cssStructure: `
    a:link { color:#00f }
    a:visited { color:#f00 }
    a:active { color:#00f }
    a:focus { color:#aad }
    a:hover { 
      background:#00f; 
      color: #fff; 
    }
    p:target { 
      background:#000; 
      color: #fff; 
    }
    `,
    description: `a 標籤中各種連結偽類選擇器的使用。`,
  },
  {
    id: 23,
    domStructure: `  
  <div class="example-area">
    <p lang="en">text1.</p>
    <p lang="fr">text2.</p>
  </div>
    `,
    cssSelector: `p:lang(en)`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  p:lang(en) {
    color: #f00;
  }`,
    description: `匹配語系為 en 的 p 標籤元素。`,
  },
  {
    id: 24,
    domStructure: `  
  <div class="example-area">
    <span>enabled 狀態</span>
    <input type="text"/>
  </div>
    `,
    cssSelector: `input:enabled`,
    cssStyle: `color: #f00;`,
    cssStructure: `
  input:enabled {
    color: #f00;
  }`,
    description: `當 <input> 元素處於啟用狀態時，輸入的文字顏色為紅色。`,
  },
  {
    id: 25,
    domStructure: `  
  <div class="example-area">
    <span>disabled 狀態</span>
    <input type="text" disabled="disabled" value="disabled text"/>
  </div>
    `,
    cssSelector: `input:disabled`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  input:disabled {
    color: #00f;
  }`,
    description: `當 <input> 元素處於不能啟用狀態時，預設文字顏色為藍色。`,
  },
  {
    id: 26,
    domStructure: `  
  <div class="example-area">
    <span>checked 狀態</span>
    <input type="radio"/>
    <input type="checkbox"/>
  </div> 
    `,
    cssSelector: `input`,
    cssStyle: ``,
    cssStructure: `
  input:checked {
    box-shadow: 0 0 0 3px orange;
  }`,
    description: `當 input 的元素 radio 與 checkbox 處於被勾選狀態時，預設陰影為橘色。`,
  },
  {
    id: 27,
    domStructure: `  
  <div class="example-area">
    <p class="line">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore.</p>
  </div>
    `,
    cssSelector: `p`,
    cssStyle: ``,
    cssStructure: `
  .line::first-line {
    color: #f00;
  }`,
    description: `p 標籤中文字段落的第一行文字顏色改變。`,
  },
  {
    id: 28,
    domStructure: `  
  <div class="example-area">
    <p class="letter">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore.</p>
  </div>
    `,
    cssSelector: `p`,
    cssStyle: ``,
    cssStructure: `
  .letter::first-letter {
    color: #f00;
  }`,
    description: `p 標籤中文字段落的第一行的第一個字母文字顏色改變。`,
  },
  {
    id: 29,
    domStructure: `  
  <div class="example-area">
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore.</p>
  </div>
    `,
    cssSelector: `p`,
    cssStyle: ``,
    cssStructure: `
  .text::before {
    content: 'Pseudo text.';
    color: #00f;
  }`,
    description: `在 p 標籤中文字段落的最前方加入的 Pseudo text 的字樣。`,
  },
  {
    id: 30,
    domStructure: `  
  <div class="example-area">
    <p class="text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore.</p>
  </div>
    `,
    cssSelector: `p`,
    cssStyle: ``,
    cssStructure: `
  .text2::after {
    content: 'Pseudo text.';
    color: #00f;
  }`,
    description: `在 p 標籤中文字段落的最前方加入的 Pseudo text 的字樣。`,
  },
  {
    id: 31,
    domStructure: `  
  <div class="example-area">
    <p class="text3">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
    `,
    cssSelector: `.text3`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  .text3 {
    color: #00f;
  }`,
    description: `改變類別選擇器名稱為 text3 的 p 標籤的文字顏色。`,
  },
  {
    id: 32,
    domStructure: `  
  <div class="example-area">
    <p id="myid">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
    `,
    cssSelector: `#myid`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  #myid {
    color: #00f;
  }`,
    description: `改變ID選擇器名稱為 myid 的 p 標籤的文字顏色。`,
  },
  {
    id: 33,
    domStructure: `  
  <div class="example-area">
    <p class="text3">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <span>Lorem ipsum dolor sit amet.</span>
  </div>
    `,
    cssSelector: `p:not(.text3)`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  p:not(.text3) {
    color: #00f;
  }`,
    description: `匹配除了 class 名稱為 text3 之外的 p 標籤。`,
  },
  {
    id: 34,
    domStructure: `  
  <div class="example-area">
    <p>Lorem ipsum dolor sit amet. 
      <span>Lorem ipsum dolor sit amet.</span>
    </p>
  </div>
    `,
    cssSelector: `p span`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  p span {
    color: #00f;
  }`,
    description: `匹配 p 標籤中所有 span 標籤的元素(不限制是否為 p 的子元素)。`,
  },
  {
    id: 35,
    domStructure: `  
  <div class="example-area">
    <p>Lorem ipsum dolor sit amet. 
      <span>Lorem ipsum dolor sit amet.</span>
      <i>Lorem ipsum dolor sit amet.</i>
    </p>
  </div>
    `,
    cssSelector: `p > span`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  p > span {
    color: #00f;
  }`,
    description: `匹配 p 標籤中子元素為 span 標籤的元素。`,
  },
  {
    id: 36,
    domStructure: `  
  <div class="example-area">
    <p>Lorem ipsum dolor sit amet. 
      <span>Lorem ipsum dolor sit amet.</span>
    </p>
    <span>Lorem ipsum dolor sit amet.</span>
  </div>
    `,
    cssSelector: `p + span`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  p + span {
    color: #00f;
  }`,
    description: `匹配與 p 標籤同層級且緊接著的 span 的標籤。`,
  },
  {
    id: 37,
    domStructure: `  
  <div class="example-area">
    <p>Lorem ipsum dolor sit amet. 
      <span>Lorem ipsum dolor sit amet.</span>
    </p>
    <span>Lorem ipsum dolor sit amet.</span>
  </div>
    `,
    cssSelector: `p ~ span`,
    cssStyle: `color: #00f;`,
    cssStructure: `
  p ~ span {
    color: #00f;
  }`,
    description: `匹配 p 標籤後同層級的所有 span 標籤。`,
  },
];

const select = document.querySelector("#select");
select.addEventListener("change", getOptionValue);
function getOptionValue(e) {
  const optionValue = e.target.value;
  // 處理例外情況
  if (optionValue === "10") {
    document.body.style.background = "transparent";
  } else {
    document.body.style.background = "cornsilk";
  }
  document.querySelector(".example-area").innerHTML =
    arr[optionValue].domStructure;
  document.querySelectorAll(`${arr[optionValue].cssSelector}`).forEach((el) => {
    el.style = arr[optionValue].cssStyle;
  });
  document.querySelector(".dom-area pre").textContent =
    arr[optionValue].domStructure;
  document.querySelector(".css-area pre").textContent =
    arr[optionValue].cssStructure;
  document.querySelector(".skill-area").textContent =
    arr[optionValue].description;
}
