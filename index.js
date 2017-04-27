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
		winston.info("render post " );
		
		// function renderAdmin(req, res) {
        //     res.render('admin/plugins/sso-qq', {
        //         callbackURL: nconf.get('url') + '/auth/qq/callback'
        //     });
        // }
        // data.router.get('/admin/plugins/sso-qq', data.middleware.admin.buildHeader, renderAdmin);
        // data.router.get('/api/admin/plugins/sso-qq', renderAdmin);

		var data = params.data.data;
		var cid = params.req.query;
		console.log(cid)
		try{
			data = JSON.parse(data);
		}catch(e){
			callback(e);
		}
        //  getCustomPost(params.data.data, function(err, customPost) {
			app.render('widgets/custom-post');

			callback()
		// });
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