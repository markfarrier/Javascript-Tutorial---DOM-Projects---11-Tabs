const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
	const id = e.target.dataset.id;
	// if id exists.  If id is undefined it will fail this if statement
	if (id) {
		// remove active from other buttons
		btns.forEach(function (btn) {
			btn.classList.remove('active');
			// I don't think this next line needs to go inside of the forEach block, as it doesn't need to run multiple times, but I've left it here because this is how the tutorial wrote the code.
			e.target.classList.add('active');
		});
		// hide other articles
		articles.forEach(function (article) {
			article.classList.remove('active');
		});
		const element = document.getElementById(id);
		element.classList.add('active');
	}
});
