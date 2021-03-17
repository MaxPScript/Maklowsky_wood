var fontSize1 = document.getElementById('w1');
fontSize1.textContent = 'H1 headline font-size is';
// var text1 = document.createTextNode('H1 headline font-size is');
// fontSize1.innerHTML = text1;
// var el = document.getElementById('w1');
// el.appendChild(fontSize1);

let text1 = document.querySelector('.headline>h1');
let style1 = getComputedStyle(text1).getPropertyValue('font-size');
document.getElementById('w2').innerHTML = style1;

let text2 = document.querySelector('.headline>h2');
let style2 = getComputedStyle(text2).getPropertyValue('font-size');
// let br = document.createElement('br');
document.getElementById('w2').innerHTML = style1 + style2;

// window.onscroll = function() {myF()};

// function myF()
// {
// 	if (document.body.scrollTop > 20) {
// 		let a = document.getElementById('id1');
// 		a.style.opacity = 1;
// 	}
// };

// let bg1 = document.getElementById('id1');
// let rect = bg1.getBoundingClientRect();
// let y1 = rect.top;

// if(y1<0) {
// 	alert(y1);	
// };

window.addEventListener("scroll", f1);
function f1() {
	// let bg1 = document.getElementById('id1');
	let bg1 = document.querySelector('.bg');
	let bg1_1 = document.querySelector('.bg2');
	let bg1_2 = document.querySelector('.headline');

	let yOffset = window.pageYOffset;
		// let headLine = document.querySelector('.headline');
		// let marginTop = getComputedStyle(headLine).getPropertyValue('margin-top');
		// let marginTopInt = parseInt(marginTop);
		// let marginTopRound = Math.round(marginTopInt);
		// let yOffsetRound = Math.round(yOffset);
		// let newOpacity = marginTopRound/yOffsetRound; 
		// let newOpacityStr = newOpacity.toString(); 
		// bg1.style.opacity = newOpacityStr;
		// bg1.style.opacity = 1 - yOffset/marginTopInt;
		bg1.style.opacity = 1 - yOffset/(let3-let3*0.15);
		bg1_1.style.opacity = 1 - yOffset/(let3-let3*0.15);
		bg1_2.style.opacity = 1 - yOffset/(let3-let3*0.2);

		// alert(marginTopRound);
	// yOffset > marginTopRound ? bg1.style.opacity = newOpacityStr : bg1.style.opacity = 1;
}

function clickF() {
	alert(window.pageYOffset);
}

function clickF2() {
	let let1 = document.querySelector('.main');
	let let2 = let1.getBoundingClientRect();
	let let3 = let2.y;
	alert(let3);
}

	let let1 = document.querySelector('.main');
	let let2 = let1.getBoundingClientRect();
	let let3 = let2.y;


