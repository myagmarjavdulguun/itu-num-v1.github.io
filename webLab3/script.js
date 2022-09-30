const container = document.getElementById('container');

const talbar = document.createElement('div');
talbar.setAttribute('id', 'talbar');
container.appendChild(talbar);

const yllaa = document.createElement('div');
yllaa.setAttribute('id', 'yllaa');
container.appendChild(yllaa);
yllaa.innerHTML = 'Congratulations,<br> you have won!!!';
yllaa.style.display = "none";

const ylagdlaa = document.createElement('div');
ylagdlaa.setAttribute('id', 'ylagdlaa');
container.appendChild(ylagdlaa);
ylagdlaa.innerHTML = 'Wish luck next time';
ylagdlaa.style.display = "none";

const dahinehleh = document.createElement('div');
dahinehleh.innerHTML = 'play again';
dahinehleh.setAttribute('id', 'dahinehleh');
container.appendChild(dahinehleh);
dahinehleh.addEventListener('click', ehleh);
dahinehleh.style.display = 'none';

const aminas = document.createElement('div');
aminas.setAttribute('id', 'aminas');
container.appendChild(aminas);

const onoo = document.createElement('div');
onoo.setAttribute('id', 'onoo');
container.appendChild(onoo);

const sedev = document.createElement('div');
sedev.setAttribute('id', 'sedev');
container.appendChild(sedev);

let ugnuud = ['bear', 
			  'giraffe',
			  'penguin',
			  'lion',
			  'tiger',
			  'sheep',
			  'elephant',
			  'donkey',
			  'fox',
			  'crocodile',
			  'teacher',
			  'constructor',
			  'engineer',
			  'waiter',
			  'musician',
			  'police',
			  'pilot',
			  'doctor',
			  'dentist',
			  'lecturer',
			  'meat',
			  'vegetables',
			  'cheese',
			  'watermelon',
			  'strawberry',
			  'chocolate',
			  'egg',
			  'banana',
			  'cabbage',
			  'bread'];
let a = Math.floor(Math.random() * ugnuud.length);
if (a>=0 && a<=9) {sedev.innerHTML = 'theme: animals'}
else if (a>=10 && a<=19) {sedev.innerHTML = 'theme: profession'}
else {sedev.innerHTML = 'theme: food'}
let taasanug = 0;
onoo.innerHTML = 'You have guessed ' + taasanug + ' words.';
let ami = 5;
let b = '';
aminas.innerHTML = "You have " + ami + " chance.";
for (var i = 0; i < ugnuud[a].length; i++) {
	b = b + '<input maxlength="1" class="useg" id="useg'+i+'" value="" onkeypress="usegDarah('+i+')">';
}
talbar.innerHTML = b;
let t = 1;
if (ugnuud[a].length>4) {t=2}
if (ugnuud[a].length>6) {t=3}
if (ugnuud[a].length>9) {t=4}
for (var i = 0; i < t; i++) {
	let s = Math.floor(Math.random() * ugnuud[a].length);
	document.getElementById('useg'+s).value = ugnuud[a][s];
	document.getElementById('useg'+s).style.backgroundColor = "lightgreen";
	document.getElementById('useg'+s).setAttribute("readOnly", "true");
}

function usegDarah(k) {
	let unicode = event.which;
	if (unicode == 13 && document.getElementById('useg'+k).value == ugnuud[a][k]) {
		document.getElementById('useg'+k).style.backgroundColor = "lightgreen";
		document.getElementById('useg'+k).setAttribute("readOnly", "true");
		duussanEseh();
	} else if (unicode == 13) {
		document.getElementById('useg'+k).style.backgroundColor = "red";
		const myTimeout = setTimeout(function() {document.getElementById('useg'+k).style.backgroundColor = "white"; document.getElementById('useg'+k).value = '';}, 1000);
		ami--;
		aminas.innerHTML = "You have " + ami + " chance.";
		if (ami == 0) {
			const myTimeout = setTimeout(function() {ylagdlaa.style.display = 'flex'; 
													 dahinehleh.style.display = 'block';
													 talbar.style.display = 'none';
												 	 onoo.style.display = 'none';
												  	 aminas.style.display = 'none';
												 	 sedev.style.display = 'none'}, 1000);
		}
	}
}
function duussanEseh() {
	let too = 0;
	for (var i = 0; i < ugnuud[a].length; i++) {
		if (document.getElementById('useg'+i).style.backgroundColor == "lightgreen") {
			too++;
		}
	}
	if (too == ugnuud[a].length) {
		taasanug++;
		onoo.innerHTML = 'You have guessed ' + taasanug + ' words.';
		const myTimeout = setTimeout(function() {b = '';
												 a = Math.floor(Math.random() * ugnuud.length);
												 for (var i = 0; i < ugnuud[a].length; i++) {
												 	b = b + '<input maxlength="1" class="useg" id="useg'+i+'" value="" onkeypress="usegDarah('+i+')">';
												 }
												 talbar.innerHTML = b;
												 if (a>=0 && a<=9) {sedev.innerHTML = 'theme: animals'}
												 else if (a>=10 && a<=19) {sedev.innerHTML = 'theme: profession'}
												 else {sedev.innerHTML = 'theme: food'}
												 t = 1;
												 if (ugnuud[a].length>4) {t=2}
												 if (ugnuud[a].length>6) {t=3}
												 if (ugnuud[a].length>9) {t=4}
												 for (var j = 0; j < t; j++) {
													 s = Math.floor(Math.random() * ugnuud[a].length);
													 document.getElementById('useg'+s).value = ugnuud[a][s];
													 document.getElementById('useg'+s).style.backgroundColor = "lightgreen";
													 document.getElementById('useg'+s).setAttribute("readOnly", "true");
												 }}, 1000);
		ylsaneseh();
	}
}
function ehleh() {
	location.reload();
}
function ylsaneseh() {
	if (taasanug == 5) {
		const myTimeout = setTimeout(function() {yllaa.style.display = 'block'; 
												 dahinehleh.style.display = 'block';
												 talbar.style.display = 'none';
												 onoo.style.display = 'none';
												 aminas.style.display = 'none';
												 sedev.style.display = 'none'}, 1000);
	}
}