var catsEl = document.getElementById('cats'),
img = document.getElementsByClassName("img");

cats = [
	{
		name: 'Percy',
		img: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
		clicks: 0
	},
	{
		name: 'John',
		img: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
		clicks: 0
	}
];

var catList = function() {
	var catListEl = document.getElementById('catList')
	cats.forEach(function(element, value) {
		catListEl.innerHTML += "<li class='catListItem' id='"+ value + "'>" + element.name + "</li>";
	});
}();

var catDetails = function(index) {
   catsEl.innerHTML = "<div class='cat' id='" + index + "'><div class='counter' id='counter_" + index + "'>" + cats[index].clicks + "</div><p>" + cats[index].name + "</p><img  width='50' src='" + cats[index].img + "'  class='img' id='img_" + index +"' /></div>";	
   imgHandler(index);
};


var catListItem = document.getElementsByClassName('catListItem');
for (var i = 0; i < catListItem.length; i++) {
	catListItem[i].addEventListener('click', function() {
		var cat = this.getAttribute('id');
		catDetails(cat);
	});
};

var imgHandler = function(index) {
	img = document.getElementById('img_'+index);
	img.addEventListener('click', function() {	
		cats[index].clicks += 1;
		document.getElementById("counter_"+index).innerHTML = cats[index].clicks;	
	});
};