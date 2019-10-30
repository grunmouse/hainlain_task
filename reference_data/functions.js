
function parseAngle(str){
	let [full, deg, min, sec, secpart] = /^(\d+)°(\d+)'(\d+)"(\.\d+)?$/.exec(str);
	if(secpart){
		sec = sec + secpart;
	}
	
	let seconds = ((+deg)*60 + (+min))*60 + (+sec);
	
	return seconds * Math.PI / (180*3600);
}

function parseSeconds(str){
	let [full, sec, secpart] = /^(\d+)"(\.\d+)?$/.exec(str);
	if(secpart){
		sec = sec + secpart;
	}	
	let seconds = +sec;
	
	return seconds * Math.PI / (180*3600);
}

function convertAngleIn(str){
	return str
		.replace(/\d+°\d+'\d+"(\.\d+)?/g, parseAngle)
		.replace(/\d+"(\.\d+)?/g, parseSeconds);
}