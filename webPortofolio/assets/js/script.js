let i = 0;
let nama = "Wahyu Nur Alim.";

function effectWrite(){
	if(i < nama.length){
		document.getElementById("ketik").innerHTML += nama.charAt(i);
		i++;
		setTimeout(effectWrite, 400);
	}
}

effectWrite();