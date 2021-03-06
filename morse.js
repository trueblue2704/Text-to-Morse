//Required modules
var sparkFunctions = require('./spark-functions.js');

//Morse code array
var charCodes=new Array(37);

charCodes["a"]="._";
charCodes["b"]="_...";
charCodes["c"]="_._.";
charCodes["d"]="_..";
charCodes["e"]=".";
charCodes["f"]=".._.";
charCodes["g"]="__.";
charCodes["h"]="....";
charCodes["i"]="..";
charCodes["j"]=".___";
charCodes["k"]="_._";
charCodes["l"]="._..";
charCodes["m"]="__";
charCodes["n"]="_.";
charCodes["o"]="___";
charCodes["p"]=".__.";
charCodes["q"]="__._";
charCodes["r"]="._.";
charCodes["s"]="...";
charCodes["t"]="_";
charCodes["u"]=".._";
charCodes["v"]="..._";
charCodes["w"]=".__";
charCodes["x"]="_.._";
charCodes["y"]="_.__";
charCodes["z"]="__..";
charCodes["1"]=".____";
charCodes["2"]="..___";
charCodes["3"]="...__";
charCodes["4"]="...._";
charCodes["5"]=".....";
charCodes["6"]="_....";
charCodes["7"]="__...";
charCodes["8"]="___..";
charCodes["9"]="____.";
charCodes["0"]="_____";
charCodes[" "]= " ";

function convertToMorse(text) {
	console.log("In convertToMorse:" + text);
	for(var i = 0; i < text.length; i++) {
		
		//Call dot(), dash() or space() depending on sequence of characters
		letter = text.charAt(i);
		for(var j = 0; j < charCodes[letter].length; j++) {
			code = charCodes[letter].charAt(j)
			console.log(code);
			if(code == ".") {
				sparkFunctions.dot();
				console.log(".");
			}
			else if(code == "_") {
				console.log("-");
				sparkFunctions.dash();
			}
			else if(code == " ") {
				console.log("_");
				sparkFunctions.space();	
			}
		}
	}
}

exports.convertToMorse = convertToMorse;