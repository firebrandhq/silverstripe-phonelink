(function($) {
		"use strict";

	$.entwine('ss', function($) {

		$('form.htmleditorfield-linkform').entwine({


			getCurrentLink: function() {
				var selectedEl = this.getSelection(),
					href = "", target = "", title = "", action = "insert", style_class = "";

				// We use a separate field for linkDataSource from tinyMCE.linkElement.
				// If we have selected beyond the range of an <a> element, then use use that <a> element to get the link data source,
				// but we don't use it as the destination for the link insertion
				var linkDataSource = null;
				if(selectedEl.length) {
					if(selectedEl.is('a')) {
						// Element is a link
						linkDataSource = selectedEl;
					// TODO Limit to inline elements, otherwise will also apply to e.g. paragraphs which already contain one or more links
					// } else if((selectedEl.find('a').length)) {
						// 	// Element contains a link
						// 	var firstLinkEl = selectedEl.find('a:first');
						// 	if(firstLinkEl.length) linkDataSource = firstLinkEl;
					} else {
						// Element is a child of a link
						linkDataSource = selectedEl = selectedEl.parents('a:first');
					}
				}
				if(linkDataSource && linkDataSource.length) this.modifySelection(function(ed){
					ed.selectNode(linkDataSource[0]);
				});

				// Is anchor not a link
				if (!linkDataSource.attr('href')) linkDataSource = null;

				if (linkDataSource) {
					href = linkDataSource.attr('href');
					target = linkDataSource.attr('target');
					title = linkDataSource.attr('title');
					style_class = linkDataSource.attr('class');
					href = this.getEditor().cleanLink(href, linkDataSource);
					action = "update";
				}


				//match a document or call the regular link handling
				if(href.match(/^tel:(.*)$/)) {
					return {
						LinkType: 'tel',
						phone: RegExp.$1,
						Description: title
					};
				} else {
					return this._super();
				}
			},


			redraw: function() {
				this._super();

				var linkType = this.find(':input[name=LinkType]:checked').val();
				if (linkType == 'tel') {
					this.find('#'+this.attr('id')+'_phone_Holder').show();
					this.find('.field#TargetBlank').hide();
				}

			},

			getLinkAttributes: function() {

				if (this.find(':input[name=LinkType]:checked').val() == 'tel') {
					var href = this.find(':input[name=phone]').val();
					if (href == '') {
						href = '';
					}
					return {
						href : 'tel:'+href, 
						target : null, 
						class : 'phone-link',
						title : this.find(':input[name=Description]').val()
					};

				} else {
					return this._super();
				}

			}

		});
	});

}(jQuery));