const url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';
let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsRendering = null;
const scale = 1.5,
  canvas = document.getElementById('pdf-render'),
  ctx = canvas.getContext('2d');
// render the page
const renderPage = num => {

}
// get document 
pdfjsLib = getDocument(url).promise.then(pdfDoc_ => {
  pdfDoc = pdfDoc_;
  console.log(pdfDoc);
});