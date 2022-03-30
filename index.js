function generation(x, y) {
	//criação dos arrays fem e male com as gerações possíveis em cada gênero
	let fem = ['great grandmother','grandmother','mother','me!',
						'daughter','granddaughter','great granddaughter']
	let male = ['great grandfather','grandfather','father','me!',
						 'son','grandson','great grandson']
	
	/*Utilizei operador ternário para verificar o valor de y e 
	identificar o gênero. Após saber qual é o gênero busquei o valor dele 
	dentro do array somando com 3, pois 3 é a maior geração possível de acordo 
	com as notas fornecidas pelo exercício*/
	/*Ex: Se x=-3 e y='m', ele retornará a geração que está no array male,
	na posição 0, que é great grandfather*/
	return y==='m'?male[3+x]:fem[3+x];
}