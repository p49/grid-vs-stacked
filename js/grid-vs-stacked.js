const stackBtn = document.querySelector(".stack");

const gridBtn = document.querySelector(".grid");

// const article = document.querySelector(".articles");

// const stackable = document.querySelector(".stackable");

const article = document.querySelectorAll('article');

function pageSwitcher() {
	for (let i = 0; i < article.length; i++) {
		article[i].classList.add('stackable');
		article[i].style.backgroundColor = "deeppink;";
	}
};

stackBtn.addEventListener('click', pageSwitcher);


function pageSwitcher1() {
	for (let i = 0; i < article.length; i++) {
		article[i].classList.remove('stackable');
		}
};

gridBtn.addEventListener('click', pageSwitcher1);



/*
gridBtn.addEventListener('click', function() {
	article.classList.remove('stackable');
});
*/
	
	
	//coolButton.addEventListener('click', () => {
  //shadesEl.classList.toggle('cool');
//});
	
	//article.stack
