(function() {
	'use strict';

	var winston = module.parent.require('winston'),
			db = module.parent.require('./database.js'),
			async = module.parent.require('async'),
			path = require('path'),
			topics = module.parent.require('./topics'),
			fs = require('fs'),
            app;

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
		winston.info("render custom post " );

		var data = params.data.data;
		var cid = params.req.query.cid+"";
		var data;

		try{
			data = JSON.parse(data);

			pid = data[cid];
		}catch(e){
			callback(e);
		}
		
		if(data){
			if(data.pid){
				topics.getTopicData([data.pid], function(err,post){
					if(err){
						callback(err);
					}
					app.render('widgets/custom-post',{data:post},callback);
				}); 
			}else{
				topics.getTopicData([data.pid], function(err,post){
					if(err){
						callback(err);
					}
					app.render('widgets/custom-post',{data:data.template},callback);
				}); 
			}
		}else{
			callback();
		}
     }

    CustomPost.defineWidgets = function(widgets, callback) {
		loadWidgetTemplate('./templates/widgets/admin/custom-post.tpl', function(templateData) {
            widgets = widgets.concat([
                {
                    widget: "custompost",
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