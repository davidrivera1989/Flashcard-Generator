// BasicCard constructor
function BasicCard(arg1, arg2) {
this.front = arg1;
this.back = arg2;
}
// BasicCard Constructor -- Continues
var firstPresident = new BasicCard( "Who was the first president of the United States?", "George Washington");
  console.log(firstPresident.front);
  console.log(firstPresident.back);
//ClozeCard Constructor -
function ClozeCard(fullText, cloze) {
// Property that contains only the cloze, the partial, or the full text.
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = this.fullText.replace(this.cloze, "...");
}
// ClonzeCard constructor -- Continues
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.fullText);

//variable brokenCloze throws this console.log
var brokenCloze = new ClozeCard("This doesn't work, oops");
console.log(brokenCloze.fullText);
