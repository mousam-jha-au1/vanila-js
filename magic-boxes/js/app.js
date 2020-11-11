// get the boxes
const reset = document.querySelector('.page-title');
const boxes = document.querySelector('.box-container').children;
const boxesArr = Array.from(boxes);

boxes[0].addEventListener('click', () => {
	boxesArr.forEach((box) => {
		box.classList.add('magic-box');
	});
});

reset.addEventListener('click', () => {
	location.reload();
});
