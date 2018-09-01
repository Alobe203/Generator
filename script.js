document.getElementById('r1').oninput = cssGenerator;
document.getElementById('r2').oninput = cssGenerator1;
document.getElementById('r3').oninput = cssGenerator2;
document.getElementById('r4').oninput = cssGenerator3;
document.getElementById('black_color').onclick = black;
document.getElementById('green_color').onclick = green;
document.getElementById('blue_color').onclick = blue;
document.getElementById('orange_color').onclick = orange;

//border-radius
function cssGenerator(){
	//Прямоугольник
	var div = document.getElementById('test');
	//получаю textarea
	var out = document.getElementById('out');
	//console.log(this.value);
	div.style.borderRadius = this.value + '%';
	//border-radius: 30px;
	out.innerHTML = '-webkit-border-radius: '+this.value+'%;\n'; 
	out.innerHTML += 'border-radius: '+this.value+'%;'; 
}

//width
function cssGenerator1(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.width = this.value + 'px';
	out.innerHTML = 'width: '+this.value+'px;'; 
}

//height
function cssGenerator2(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.height = this.value + 'px';
	out.innerHTML = 'height: '+this.value+'px;'; 
}

//border width
function cssGenerator3(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.border = this.value + 'px' + ' solid' + ' red';
	out.innerHTML = 'border: '+this.value+'px' + ' solid' + ' red;'; 
}

//div color black
function black(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.background = 'black';
	out.innerHTML = 'background: ' + 'black;';
}

//div color green
function green(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.background = 'green';
	out.innerHTML = 'background: ' + 'green;';
}

//div color blue
function blue(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.background = 'blue';
	out.innerHTML = 'background: ' + 'blue;';
}

//div color orange
function orange(){
	var div = document.getElementById('test');
	var out = document.getElementById('out');
	div.style.background = 'orange';
	out.innerHTML = 'background: ' + 'orange;';
}
