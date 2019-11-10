window.addEventListener("load", () => {
	window.vue = new Vue({
		el: "#app",
		data: {
			isLoading: true,
			cart: [],
			saved: []
		},
		methods: {
			removeFromCart(index) {
				console.log(index);
				this.cart.splice(index, 1);
			},

			saveForlater(index) {
				const item = this.cart.splice(index, 1);
				this.saved.push(item[0]);
			},

			removeFromSaved(index) {
				this.saved.splice(index, 1);
			},
			moveToCart(index) {
				const item = this.saved.splice(index, 1);
				this.cart.push(item[0]);
			}
		},
		created() {
			fetch("./data.json")
				.then(res => {
					return res.json();
				})
				.then(res => {
					console.log(res);
					this.isLoading = false;
					this.cart = res.cart;
					this.saved = res.saved;
				});
		}
	});
});
