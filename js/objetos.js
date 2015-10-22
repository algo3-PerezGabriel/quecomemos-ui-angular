var Receta = function (nombre) {
	this.nombre = nombre || '';
};

var ingrediente = function (dosis, nombre) {
	this.nombre = nombre || '';
	this.dosis = dosis || '';
};