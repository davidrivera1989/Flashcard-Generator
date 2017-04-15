// BasicCard constructor - Accepts front and back arguments
function BasicCard(arg1, arg2) {
// These  Properties contain the front and back arguments
this.front = arg1;
this.back = arg2;
}

// BasicCard Constructor -- Continues
var firstPresident = new BasicCard( "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
  console.log(firstPresident.front);

// "George Washington"
  console.log(firstPresident.back);

//ClozeCard Constructor - Accepts fullText and cloze arguments
function ClozeCard(fullText, cloze) {
// Log an error when the cloze deletion does not appear in the input text
	if (fullText.search(cloze) === -1) {
		console.log("This doesn't work", "oops")
		return;
	}
// Property that contains only the cloze, the partial, or the full text.
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "...");
}
// ClonzeCard constructor -- Continues
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.fullText);
