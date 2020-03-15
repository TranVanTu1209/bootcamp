/** @format */

// listen for form submit
var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", saveBookMark);
// save book mark
function saveBookMark(e) {
	// prevent default behavior
	e.preventDefault();
	// get form value
	var siteName = document.getElementById("siteName");
	var siteUrl = document.getElementById("siteUrl");
	var bookMark = {
		name: siteName.value,
		url: siteUrl.value
	};
	console.log(bookMark);
	// local storage
	// localStorage.setItem("test", "Hello world");
	// console.log(localStorage.getItem("test"));
	localStorage.removeItem("test");
	if (localStorage.getItem("bookMarks") === null) {
		// initialize bookmark array
		var bookMarks = [];
		// add value
		bookMarks.push(bookMark);
		// set to local storage
		localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
	} else {
		var bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
		// add book mark to array
		bookMarks.push(bookMark);
		// reset to local storage
		localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
	}
	fetchBookmarks();
}
// delete bookmark

function deleteBookMark(url) {
	// get bookmarks from local storage
	var bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
	// loop through bookmarks
	bookMarks.forEach((bm, index) => {
		if (bm.url === url) {
			// remove from array
			bookMarks.slice(index, 1);
		}
	});
	// reset local storage
	localStorage.setItem("bookMarks", bookMarks);

	// set book mark
	fetchBookmarks();
}
// fetch bookmarks
function fetchBookmarks() {
	var bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
	var bookMarkResults = document.querySelector(".book-mark-result");
	// give out the output
	var output = "";
	bookMarks.forEach((bookmark) => {
		var name = bookmark.name;
		var url = bookmark.url;
		output += `
      <div>
      <h1 class="text-primary">
      ${name}
      </h1>
      <a class="small">Visit ${url}</a>
      <a href="#" class="btn btn-danger" onclick="deleteBookMark(\'' + ${url} + '\')">Delete</a>
      </div>
    `;
	});
	bookMarkResults.innerHTML = output;
}
document.querySelector(".test").addEventListener("click", function() {
	this.parentElement.parentElement.remove();
});
