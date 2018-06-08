window.cipher = {
	encode: (offset, string) => {
		//Almacenar el codigo ASCII de la letra cifrada
		let codeCipher;
		//Almacenar el string final ya cifrado
		let textResult = '';
		//Recorrer cada uno de los caracteres del string
		for (let i = 0; i <= string.length - 1 ; i++) {
			//Si el string es un espacio, se deja igual. No se aplica la formula.
			if(string[i] === ' '){
				textResult += ' ';
			}else{
				//Obtener el codigo ASCII de la letra
				const codeAscii = string.charCodeAt(i); 
				//Para MINUSCULA, codigo ASCII entre 65 y 90
				if(codeAscii > 90){
					position = codeAscii - 97 + offset;
					//Formula para obtener el codigo ASCII de la letra CIFRADA
					codeCipher = (position % 26) + 97; 
				//Para MAYUSCULA, codigo ASCII entre 97 y 122
				}else{
					const position = codeAscii - 65 + offset;
					codeCipher = (position % 26) + 65; 
				}
				 //Obtener la letra que corresponde con el codigo ASCII, caracter ya cifrado
				const letterCipher = String.fromCharCode(codeCipher);
				//Agregar la letra cifrada al resultado
				textResult += letterCipher;
			}
		}
		return textResult;
	},
	decode: (offset, string) => {
		let codeCipher;
		let textResult = '';
		for (let i = 0; i <= string.length - 1; i++) {
			if(string[i] === ' '){
				textResult += ' ';
			}else{
				const codeAscii = string.charCodeAt(i);
				if(codeAscii > 90){
					//Calcula la posicion de la letra dentro del alfabeto
					const position = codeAscii - 97 - offset;
					//Si la posicion es menor de cero (negativo) 
					if(position < 0){
						//Obtiene el codigo ASCII de la letra ya cifrada.
						codeCipher = (position % 26) + 123;
					}else{
						codeCipher = (position % 26) + 97;
					}
				}else{
					const position = codeAscii - 65 - offset;
					if(position < 0){
						codeCipher = (position % 26) + 91;
					}else{
						codeCipher = (position % 26) + 65;
					}
				}
				const letterCipher = String.fromCharCode(codeCipher);
				textResult += letterCipher;
			}
		}
		return textResult;
	}
};
