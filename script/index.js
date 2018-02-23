var App = function() {
	this.subscribeButton = document.querySelector(".top-bar .subscribe");
	this.subscribeModal = document.querySelector(".subscribe-modal");
	this.closeSubscribeModalButton = this.subscribeModal.querySelector(".close");
	this.wordModal = document.querySelector(".word-modal");
	this.closeWordModalButton = this.wordModal.querySelector(".close");
}

App.prototype = {
	init: function() {
		this.listenForSubscribeButtonClick(this);
		this.listenForCloseSubscribeModalButtonClick(this);
		this.scheduleWordModalShow(this);
		this.scheduleWordModalShow(this);
		this.listenForCloseWordModalButtonClick(this);
	},
	showSubscribeModal: function() {
		this.subscribeModal.classList.add("active");
	},
	hideSubscribeModal: function() {
		this.subscribeModal.classList.remove("active");
	},
	listenForSubscribeButtonClick: function(app) {
		app.subscribeButton.addEventListener("click", function() {
			app.showSubscribeModal();
		})
	},
	listenForCloseSubscribeModalButtonClick: function(app) {
		app.closeSubscribeModalButton.addEventListener("click", function() {
			app.hideSubscribeModal();
		})
	},
	showWordModal: function() {
		this.wordModal.classList.add("active");
	},
	hideWordModal: function() {
		this.wordModal.classList.remove("active");
	},
	scheduleWordModalShow: function(app) {
		setTimeout(function() {
			app.showWordModal();
		}, 5000)
	},
	listenForCloseWordModalButtonClick: function(app) {
		app.closeWordModalButton.addEventListener("click", function() {
			app.hideWordModal();
		})
	}
}

var app = new App();
app.init();