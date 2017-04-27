(function() {
	'use strict';

	var winston = module.parent.require('winston'),
			db = module.parent.require('./database.js'),
			async = module.parent.require('async'),
			path = require('path'),
			topics = module.parent.require('./topics'),
			fs = require('fs'),
            app;

    // function getCustomPost(data,callback){
	// 	let posts = [];
	// 	for(var category in data){
			
	// 	}
    //     db.getObjectField('category:post', cid, function (err, pid) {
	// 		if (err) {
	// 			return callback(err);
	// 		}
			
	// 	});
    // }

    function loadWidgetTemplate(template, next) {
		var __dirname = "./node_modules/nodebb-widget-custom-post";
		var templateFile = path.resolve(__dirname, template);
		winston.info("Loading templateFile: " + templateFile);

		fs.readFile(templateFile, function (err, data) {
			if (err) {
				console.log(err.message);
				return next(null, err);
			}
			next(data.toString());
		});
	}

	var CustomPost = {};

	CustomPost.init = function (data, callback) {
		app = data.router;

        callback();
	};

    CustomPost.renderCustomPost = function(params,callback){
		console.log(params);
		// var data = params.data.data;
		// try{
		// 	data = JSON.parse(data);
		// }catch(e){
		// 	callback(e);
		// }
        //  getCustomPost(params.data.data, function(err, customPost) {
		// 	app.render('widgets/custom-post', {data:customPost}, callback);
		// });
     }

    CustomPost.defineWidgets = function(widgets, callback) {
		loadWidgetTemplate('./templates/widgets/admin/custom-post.tpl', function(templateData) {
            widgets = widgets.concat([
                {
                    widget: "custom post",
                    name: "custom post",
                    description: "Renders the custom post",
                    content: templateData
                }
            ]);

            callback(null, widgets);
        });
	};

	module.exports = CustomPost;
})();