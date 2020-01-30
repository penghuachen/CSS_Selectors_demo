

const arr = [
  {
    id: 0,
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

document.querySelector('.example-area').innerHTML = arr[0].domStructure;
document.querySelector('.dom-area pre').textContent = arr[0].domStructure;
document.querySelector('.css-area pre').textContent = arr[0].csstructure;
document.querySelector('.skill-area').textContent = arr[0].description;