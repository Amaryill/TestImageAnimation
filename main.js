

window.onload = function () {
	var tableauIMG = ["src/Chrysanthemum.jpg","src/Desert.jpg","src/Hydrangeas.jpg","src/Jellyfish.jpg","src/Koala.jpg","src/Lighthouse.jpg","src/Penguins.jpg","src/Tulips.jpg"];
	
	function changeBackground(bUrl) {
		document.getElementById('bg').style.background=bUrl;
		return document.getElementById('bg').src=bUrl;
	}
	
	var compteur = 0;
	var vitesse = 0;
	var myVar;// = setInterval(defilBg,vitesse);
	
	
	tizen.tvinputdevice.registerKey("MediaPlay");
	tizen.tvinputdevice.registerKey("MediaPause");
	tizen.tvinputdevice.registerKey("MediaFastForward");
	tizen.tvinputdevice.registerKey("MediaRewind");
	
	document.addEventListener('keydown', function(e) {
		
			switch(e.keyCode) {
	        case  19 :
	            console.log('keydown : PAUSE');
	            console.log("0");
	            clearInterval(myVar);
	            document.getElementById('vitesse').innerHTML = "0";
	            break;
	        case  415 :
	            console.log('keydown : PLAY');
	            clearInterval(myVar);
	            vitesse = 3000;
	            console.log(vitesse);
	            myVar = setInterval(defilBg,vitesse);
	            document.getElementById('vitesse').innerHTML = vitesse;
	            break;
	        case 417 : 
	        	console.log('keydown : FAST FORWARD');
	        	clearInterval(myVar);
	        	vitesse -= 1000;
	        	console.log(vitesse);
	        	myVar = setInterval(defilBg,vitesse);
	        	document.getElementById('vitesse').innerHTML = vitesse;
	        	break;
	        case 412 : 
	        	console.log('keydown : REWIND');
	        	clearInterval(myVar);
	        	vitesse += 1000;
	        	console.log(vitesse);
	        	myVar = setInterval(defilBg,vitesse);
	        	document.getElementById('vitesse').innerHTML = vitesse;
	        	break;
			}
		
    });
	
	
	
	//
	
	function defilBg(){
		
		changeBackground(tableauIMG[compteur]);
		
		compteur++;
		
		if (compteur===tableauIMG.length){
			compteur = 0;
		}
		
	}
	
	
	
};


