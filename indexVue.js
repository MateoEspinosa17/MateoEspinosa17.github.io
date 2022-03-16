var app = new Vue({
	el: '#app',
	data: {
		message: 'Desarrollo Web con Vue :)',
		image: 'gato.jpg',
		oculto: ' ',
	},
	methods: {
		show: function () {
			this.oculto = 'La tierra es plana jiji';
		},
	},
});
