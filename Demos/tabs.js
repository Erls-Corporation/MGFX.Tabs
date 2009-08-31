//MGFX.Tabs. Copyright (c) 2008-2009 Sean McArthur <http://mcarthurgfx.com/>, MIT Style License.

var MGFX = MGFX || {};

MGFX.Tabs = new Class({
	
	Extends: MGFX.Rotater,
	
	options: {
		autoplay: false
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
		
		this.parent(slides,options);
		return this;
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
	
	activateTab: function(tabIndex) {
		this.tabs.removeClass('active');
		this.tabs[tabIndex].addClass('active');		
	}.protect(),
	
	showSlide: function(slideIndex){
		if(slideIndex == this.currentSlide) return this;
		this.activateTab(slideIndex);
		this.parent(slideIndex);
		return this;
	}
	
});