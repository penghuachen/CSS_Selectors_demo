
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
    <p>This is a text1.</p>
    <p>This is a text1.</p>
    <p>This is a text1.</p>
  </div>
    `,
    csstructure: `
  .example-area *{
    color: #f00;
  }
    `,
    description: `any elements`,
  }
];

const select = document.querySelector('#select');
select.addEventListener('change', getOptionValue);
function getOptionValue(e) {
  const optionValue = e.target.value
  document.querySelector('.example-area').innerHTML = arr[optionValue].domStructure;
  document.querySelector('.dom-area pre').textContent = arr[optionValue].domStructure;
  document.querySelector('.css-area pre').textContent = arr[optionValue].csstructure;
  document.querySelector('.skill-area').textContent = arr[optionValue].description;
}

