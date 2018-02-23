var App = function() {
    this.commentTabs = document.querySelectorAll(".comment-tabs .tab");
    this.commentViews = document.querySelectorAll(".comment-views .view");
}

App.prototype = {
    init: function() {
        this.commentTabsClick(this);
    },
    commentTabsClick: function(app) {
        app.commentTabs.forEach(function(tab) {
            //add event listener
            tab.addEventListener("click", function() {
                //get necessary values
                var clicked = this,
                    ref = this.getAttribute("data-ref");
                //activate tab
                clicked.classList.add("active");
                //deactivate other tabs
                app.commentTabs.forEach(function(tab) {
                    if(tab !== clicked) {
                        tab.classList.remove("active");
                    }
                })
                //handle comment views
                app.commentViews.forEach(function(view) {
                    if(!view.classList.contains(ref)) {
                        view.classList.remove("active");
                    }
                    else {
                        view.classList.add("active");
                    }
                })
            })
        })
    }
}

var app = new App();
app.init();