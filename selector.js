
const arr = [
  {
    id: 0,
    domStructure: '',
    csstructure: '',
    description: '',
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
    csstructure: `
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
    cssSelector: `.example-area p`,
    cssStyle: `color: #00f;`,
    csstructure: `
  .example-area p{
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
    csstructure: `
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
    csstructure: `
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
    csstructure: `
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
    csstructure: `
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
    csstructure: `
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
    csstructure: `
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
    csstructure: `
  p[class|="color"] {
    color: #f00;
  }
    `,
    description: `匹配 p 標籤中 class 屬性的值包含零或多個連字號(-)且以左起開始值為 color 的元素。`,
  },
];

const select = document.querySelector('#select');
select.addEventListener('change', getOptionValue);
function getOptionValue(e) {
  const optionValue = e.target.value
  document.querySelector('.example-area').innerHTML = arr[optionValue].domStructure;
  document.querySelectorAll(`${arr[optionValue].cssSelector}`).forEach(el => {
    el.style = arr[optionValue].cssStyle;
  })
  document.querySelector('.dom-area pre').textContent = arr[optionValue].domStructure;
  document.querySelector('.css-area pre').textContent = arr[optionValue].csstructure;
  document.querySelector('.skill-area').textContent = arr[optionValue].description;
}

