var iframe = document.getElementById('speedgrader_iframe');
var qs = iframe.contentDocument.querySelectorAll('input.question_input');
for (var x=0; x<qs.length; x++) {
  qs[x].value = qs[0].nextSibling.nextSibling.innerText.slice(2)
}; 
console.log("foo bar");
