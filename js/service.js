queComemosApp.service('RecetasService',function() {
	
	idRecetas = 0;


	this.recetas = [
			{
				id: 0,
				nombre: 'Pollo Con Papas', 
				calorias: 120,
				dificultad: 'MEDIANA',
				temporada: 'TODO EL AÑO',
				condimentos: ["sal","crema"],
				ingredientes: 
				[
					{	nombreIngrediente: "Papas",
						dosis: "300g",},
					{	nombreIngrediente: "Pollo",
						dosis: "200g",},],},
			{
				id: 1,
				nombre: 'Arroz Salteado', 
				calorias: 520,
				dificultad: 'DIFICIL',
				temporada: 'OTOÑO',
				condimentos: ["sal","aceite"],
				ingredientes: [
					{
						nombreIngrediente: "Arroz",
						dosis: "50g",
					},{
						nombreIngrediente: "Ajo",
						dosis: "2d",
					},{
						nombreIngrediente: "Zanahoria",
						dosis: "20g",
					},
				],},
			{
				id: 2,
				nombre: 'Ensalada Cesar', 
				calorias: 80,
				dificultad: 'FACIL',
				temporada: 'VERANO',
				condimentos: ["limon","vinagre"],
				ingredientes: [
					{
						nombreIngrediente: "Lechuga",
						dosis: "80g",
					},{
						nombreIngrediente: "Tomate",
						dosis: "2u",
					},{
						nombreIngrediente: "Salsa Cesar",
						dosis: "100ml",
					},
				],},
			{
				id: 3,
				nombre: 'Asado de tira', 
				calorias: 350,
				dificultad: 'MEDIANA',
				temporada: 'PRIMAVERA',
				condimentos: ["sal parrillera"],
				ingredientes: [
					{
						nombreIngrediente: "Carne Asado",
						dosis: "800g p/p",
					},
				],},
			{
				id: 4,
				nombre: 'Asado de verduras', 
				calorias: 90,
				dificultad: 'FACIL',
				temporada: 'INVIERNO',
				condimentos: [""],
				ingredientes: [
					{
						nombreIngrediente: "Papas",
						dosis: "3u",
					},{
						nombreIngrediente: "Cebolla",
						dosis: "2u",
					},{
						nombreIngrediente: "Berenjena",
						dosis: "1u",
					},
				],},
			{
				id: 5,
				nombre: 'Puchero De Campo', 
				calorias: 500,
				dificultad: 'DIFICIL',
				temporada: 'INVIERNO',
				condimentos: ["oregano","pimenton"],
				ingredientes: [
					{
						nombreIngrediente: "Porotos",
						dosis: "100g",
					},{
						nombreIngrediente: "Cebolla",
						dosis: "1u",
					},
				],},
			{
				id: 6,
				nombre: 'Ensalada Rusa', 
				calorias: 150,
				dificultad: 'FACIL',
				temporada: 'PRIMAVERA',
				condimentos: ["mayonesa"],
				ingredientes: [
					{
						nombreIngrediente: "Papas",
						dosis: "60g",
					},{
						nombreIngrediente: "Arbejas",
						dosis: "20g",
					},
				],},
			{
				id: 7,
				nombre: 'Fideos con pesto', 
				calorias: 290,
				dificultad: 'MEDIANA',
				temporada: 'OTOÑO',
				condimentos: ["nuez","aceite"],
				ingredientes: [
					{
						nombreIngrediente: "Fideos",
						dosis: "1 pqt",
					},{
						nombreIngrediente: "Albhaca",
						dosis: "3g",
					},
				],},
			{
				id: 8,
				nombre: 'Pastel de Papas', 
				calorias: 440,
				dificultad: 'DIFICIL',
				temporada: 'INVIERNO',
				condimentos: ["huevito"],
				ingredientes: [
					{
						nombreIngrediente: "Papas",
						dosis: "5 u ",
					},{
						nombreIngrediente: "Carne Picada Especial",
						dosis: "500g",
					},{
						nombreIngrediente: "Zanahoria",
						dosis: "3u",
					},{
						nombreIngrediente: "Manteca",
						dosis: "30g",
					},
				],}
		];



	this.crearReceta = function (nombre){
		var receta = new Receta(nombre);
		receta.id = idRecetas ++;
		return receta;
	};

	this.getRecetaById = function (id) {
    	return _.find(this.recetas, function (receta) {
      		return receta.id == id;
    });
  };
});
