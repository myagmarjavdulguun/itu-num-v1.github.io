const container = document.getElementById("container");
const pickdate = document.createElement("div");
const textnode = document.createTextNode("");

pickdate.setAttribute('id', 'pickdate');
pickdate.appendChild(textnode);
container.appendChild(pickdate);

const calendar = document.createElement("div");
calendar.setAttribute('id', 'calendar');
container.appendChild(calendar);

const jiliinhusnegt = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
jiliinhusnegt.setAttribute('id', 'jiliinhusnegt');
div4.setAttribute('class', 'oniisum');
div5.setAttribute('id', 'div5');
div6.setAttribute('class', 'oniisum');
div7.setAttribute('id', 'div7');
container.appendChild(jiliinhusnegt);
jiliinhusnegt.appendChild(div4);
jiliinhusnegt.appendChild(div5);
jiliinhusnegt.appendChild(div6);
jiliinhusnegt.appendChild(div7);
div4.innerHTML = '<p><</p>';
div6.innerHTML = '<p>></p>';
div7.innerHTML = '<p>ok</p>';

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
calendar.appendChild(div1);
calendar.appendChild(div2);
calendar.appendChild(div3);
div1.setAttribute('id', 'sumz');
div3.setAttribute('id', 'sumb');
div2.setAttribute('id', 'husnegt');
div1.innerHTML = '<';
div3.innerHTML = '>';

const header = document.createElement('div');
header.setAttribute('id', 'header');
div2.appendChild(header);

const on = document.createElement('p');
on.setAttribute('id', 'on');
const sar = document.createElement('p');
sar.setAttribute('id', 'sar');
header.appendChild(on);
header.appendChild(sar);

const week = document.createElement('div');
week.setAttribute('id', 'week');
husnegt.appendChild(week);
const div8 = document.createElement('div');
const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');
const div13 = document.createElement('div');
const div14 = document.createElement('div');
week.appendChild(div8);
week.appendChild(div9);
week.appendChild(div10);
week.appendChild(div11);
week.appendChild(div12);
week.appendChild(div13);
week.appendChild(div14);
div8.innerHTML = 'Su';
div9.innerHTML = 'Mo';
div10.innerHTML = 'Tu';
div11.innerHTML = 'We';
div12.innerHTML = 'Th';
div13.innerHTML = 'Fi';
div14.innerHTML = 'Sa';

const odruud = document.createElement('div');
odruud.setAttribute('id', 'odruud');
div2.appendChild(odruud);






const d = new Date();
let year = d.getFullYear();
on.innerHTML = year;
let month = d.getMonth();
let days;
let sarinner = '';
let table = '';


if (month == 0) {sarinner = 'January';}
if (month == 1) {sarinner = 'February';}
if (month == 2) {sarinner = 'March';}
if (month == 3) {sarinner = 'April';}
if (month == 4) {sarinner = 'May';}
if (month == 5) {sarinner = 'June';}
if (month == 6) {sarinner = 'July';}
if (month == 7) {sarinner = 'August';}
if (month == 8) {sarinner = 'September';}
if (month == 9) {sarinner = 'October';}
if (month == 10) {sarinner = 'November';}
if (month == 11) {sarinner = 'December';}
sar.innerHTML = sarinner;

if (month == 0) {days = 31}
if (month == 1 && year%4 == 0) {days = 29}
if (month == 1 && year%4 != 0 || year%100 == 0 && year%400 != 0) {days = 28}
if (month == 2) {days = 31}
if (month == 3) {days = 30}
if (month == 4) {days = 31}
if (month == 5) {days = 30}
if (month == 6) {days = 31}
if (month == 7) {days = 31}
if (month == 8) {days = 30}
if (month == 9) {days = 31}
if (month == 10) {days = 30}
if (month == 11) {days = 31}

let sariinnegen = new Date(sarinner + " 1, " + year).getDay();

for (let i = 0; i < 37; i++) {
	table = table + "<div id='odriinnud"+i+"'></div>";
}
odruud.innerHTML = table;
for (var i = 0; i < days; i++) {
		document.getElementById('odriinnud'+(i+sariinnegen)).innerHTML = i+1;
}

if(year == d.getFullYear() && month == d.getMonth()) {
document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.backgroundColor = 'skyblue';
document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.borderRadius = '20px';
}

document.getElementById('sumz').addEventListener('click', month_d);
document.getElementById('sumb').addEventListener('click', month_i);
on.addEventListener('click', select_year);
div7.addEventListener('click', finish);
div4.addEventListener('click', on_hasah);
div6.addEventListener('click', on_nemeh);


function month_d() {
	if (month != 0) {
		month --;
		if (month == 0) {sarinner = 'January';}
		if (month == 1) {sarinner = 'February';}
		if (month == 2) {sarinner = 'March';}
		if (month == 3) {sarinner = 'April';}
		if (month == 4) {sarinner = 'May';}
		if (month == 5) {sarinner = 'June';}
		if (month == 6) {sarinner = 'July';}
		if (month == 7) {sarinner = 'August';}
		if (month == 8) {sarinner = 'September';}
		if (month == 9) {sarinner = 'October';}
		if (month == 10) {sarinner = 'November';}
		if (month == 11) {sarinner = 'December';}
		sar.innerHTML = sarinner;
	} else {
		year--;
		on.innerHTML = year;
		month = 11;
		sar.innerHTML = 'December';
	}
	if (month == 0) {days = 31}
	if (month == 1 && year%4 == 0) {days = 29}
	if (month == 1 && year%4 != 0 || year%100 == 0 && year%400 != 0) {days = 28}
	if (month == 2) {days = 31}
	if (month == 3) {days = 30}
	if (month == 4) {days = 31}
	if (month == 5) {days = 30}
	if (month == 6) {days = 31}
	if (month == 7) {days = 31}
	if (month == 8) {days = 30}
	if (month == 9) {days = 31}
	if (month == 10) {days = 30}
	if (month == 11) {days = 31}
	let sariinnegen = new Date(sarinner + " 1, " + year).getDay();

	odruud.innerHTML = table;
	for (var i = 0; i < days; i++) {
			document.getElementById('odriinnud'+(i+sariinnegen)).innerHTML = i+1;
	}
	if(year == d.getFullYear() && month == d.getMonth()) {
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.backgroundColor = 'skyblue';
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.borderRadius = '20px';
	}
}

function month_i() {
	if (month == 11) {
		year++;
		on.innerHTML = year;
		month = 0;
		sar.innerHTML = 'January';
	} else {
		month ++;
		if (month == 0) {sarinner = 'January';}
	if (month == 1) {sarinner = 'February';}
	if (month == 2) {sarinner = 'March';}
	if (month == 3) {sarinner = 'April';}
	if (month == 4) {sarinner = 'May';}
	if (month == 5) {sarinner = 'June';}
	if (month == 6) {sarinner = 'July';}
	if (month == 7) {sarinner = 'August';}
	if (month == 8) {sarinner = 'September';}
	if (month == 9) {sarinner = 'October';}
	if (month == 10) {sarinner = 'November';}
	if (month == 11) {sarinner = 'December';}
	sar.innerHTML = sarinner;
	}
	if (month == 0) {days = 31}
	if (month == 1 && year%4 == 0) {days = 29}
	if (month == 1 && year%4 != 0 || year%100 == 0 && year%400 != 0) {days = 28}
	if (month == 2) {days = 31}
	if (month == 3) {days = 30}
	if (month == 4) {days = 31}
	if (month == 5) {days = 30}
	if (month == 6) {days = 31}
	if (month == 7) {days = 31}
	if (month == 8) {days = 30}
	if (month == 9) {days = 31}
	if (month == 10) {days = 30}
	if (month == 11) {days = 31}
	let sariinnegen = new Date(sarinner + " 1, " + year).getDay();

	odruud.innerHTML = table;
	for (var i = 0; i < days; i++) {
			document.getElementById('odriinnud'+(i+sariinnegen)).innerHTML = i+1;
	}
	if(year == d.getFullYear() && month == d.getMonth()) {
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.backgroundColor = 'skyblue';
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.borderRadius = '20px';
	}
}
function select_year() {
	jiliinhusnegt.style.display = 'flex';
	calendar.style.display = 'none';
	div5.innerHTML = '<p>'+year+'</p>';
}
function finish() {
	calendar.style.display = 'flex';
	jiliinhusnegt.style.display = 'none';
	on.innerHTML = year;
}
function on_hasah() {
	year--;
	div5.innerHTML = year;
	if (month == 0) {days = 31}
	if (month == 1 && year%4 == 0) {days = 29}
	if (month == 1 && year%4 != 0 || year%100 == 0 && year%400 != 0) {days = 28}
	if (month == 2) {days = 31}
	if (month == 3) {days = 30}
	if (month == 4) {days = 31}
	if (month == 5) {days = 30}
	if (month == 6) {days = 31}
	if (month == 7) {days = 31}
	if (month == 8) {days = 30}
	if (month == 9) {days = 31}
	if (month == 10) {days = 30}
	if (month == 11) {days = 31}
	let sariinnegen = new Date(sarinner + " 1, " + year).getDay();

	odruud.innerHTML = table;
	for (var i = 0; i < days; i++) {
			document.getElementById('odriinnud'+(i+sariinnegen)).innerHTML = i+1;
	}
	if(year == d.getFullYear() && month == d.getMonth()) {
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.backgroundColor = 'skyblue';
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.borderRadius = '20px';
	}
}
function on_nemeh() {
	year++;
	div5.innerHTML = year;
	if (month == 0) {days = 31}
	if (month == 1 && year%4 == 0) {days = 29}
	if (month == 1 && year%4 != 0 || year%100 == 0 && year%400 != 0) {days = 28}
	if (month == 2) {days = 31}
	if (month == 3) {days = 30}
	if (month == 4) {days = 31}
	if (month == 5) {days = 30}
	if (month == 6) {days = 31}
	if (month == 7) {days = 31}
	if (month == 8) {days = 30}
	if (month == 9) {days = 31}
	if (month == 10) {days = 30}
	if (month == 11) {days = 31}
	let sariinnegen = new Date(sarinner + " 1, " + year).getDay();

	odruud.innerHTML = table;
	for (var i = 0; i < days; i++) {
			document.getElementById('odriinnud'+(i+sariinnegen)).innerHTML = i+1;
	}
	if(year == d.getFullYear() && month == d.getMonth()) {
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.backgroundColor = 'skyblue';
		document.getElementById('odriinnud'+(d.getDate()+sariinnegen-1)).style.borderRadius = '20px';
	}
}