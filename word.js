let words=["car","smartphone","house",'dog','laptop','summer','tablet','shop','water','planet'];
let notGused=false
let pictures1=['car1.gif','phone1.webp','house1.gif','dog1.webp','laptop1.webp','summer1.webp','tablet1.webp','shop1.webp','water1.webp','planet1.webp',]
let pictures2=['car2.gif','phone2.gif','house2.gif','dog2.webp','laptop2.webp','summer2.gif','tablet2.webp','shop2.webp','water2.webp','planet2.webp']
let secret=[];
let word;
let random;
let audio = new Audio('error_sound.mp3');
function start(argument) {
	document.getElementById('word').value='';
	clearInterval(pictureInterval)
	random=Math.floor(Math.random() * 10 );
	word=words[random]
	document.getElementById('gif').src=pictures1[random]
	document.getElementById('img').src=pictures2[random]
	secret=[]
	

	console.log(word)
	for(let i =0; i<word.length; i++){
		secret[i]='*'

	}
	document.getElementById('input').value=secret.join('');
}
function check(argument) {
	notGused=false
	for(let i =0; i<word.length; i++){
		if (word[i]==document.getElementById('word').value) {
			secret[i]=document.getElementById('word').value;
			notGused=true;
		} 




		document.getElementById('input').value=secret.join('');

	}

	if (notGused==false) {
			audio.play();

		}

	document.getElementById('word').value='';
	if(secret.join('').includes('*')==false) {
		document.getElementById('gif').src='firework1.webp'
		document.getElementById('img').src='firework1.webp'
		document.getElementById('word').value='Вы победили!'
		setTimeout(start,3000)
	}
}
function wellcome (argument) {
	random=Math.floor(Math.random() * 10 );
	document.getElementById('gif').src=pictures1[random]
	random=Math.floor(Math.random() * 10 );
	document.getElementById('img').src=pictures2[random]
}
let pictureInterval=setInterval(wellcome,1500)

function enter(event) {
	if(event.keyCode==13){
		check()
	}
}