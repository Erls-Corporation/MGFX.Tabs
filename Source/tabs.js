//MGFX.Tabs. Copyright (c) 2008-2009 Sean McArthur <http://mcarthurgfx.com/>, MIT Style License.

var MGFX = MGFX || {};

MGFX.Tabs = new Class({
	
	Extends: MGFX.Rotater,
	
	options: {
		autoplay: false,
		onShowSlide: function(slideIndex) {
			this.tabs.removeClass('active');
			this.tabs[tabIndex].addClass('active');
		}
	},
	
	initialize: function(tabs, slides, options){
		this.setOptions(options);
		this.tabs = $$(tabs);
		this.createTabs();
		if(this.options.hash && window.location.hash) {
			var hash = window.location.hash.substring(1);
			this.tabs.each(function(el, index) {
				if(el.get('id') == hash) {
					options.startIndex = index;
				}
			});
		}
		return this.parent(slides,options);
	},
	
	createTabs: function () {
		this.tabs.each(function(tab,index){
			tab.addEvent('click', function(event){ 
				event.preventDefault();
				this.showSlide(index);
				this.stop();
			}.bind(this));
		}.bind(this));
	}.protect(),
	
});