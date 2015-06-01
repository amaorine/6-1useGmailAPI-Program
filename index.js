#!/usr/bin/env node
'use strict';
var fs=require('fs');

var querystring=require('querystring');

console.log("Hello");
if(process .argv[2]===undefined){
	console.log('argv:',process.argv);
	}
if(process .argv[2]==='home'){
	console.log('HOME:',process.env.HOME);
}
if(process .argv[2]==='init'){
	//installed
	var config=JSON.parse(fs.readFileSync(',/config.json')).installed;
	console.log(config);
}
if(process .argv[2]==='auth'){
	//installed
	var config=JSON.parse(fs.readFileSync(',/config.json')).installed;
	var parms={
		response_type:'code',
		access_type:'offline',
		approval_prompt:'force',
		client_id:config.client_id,	//configƒtƒ@ƒCƒ‹‚©‚çidŽæ‚Á‚Ä‚­‚é
		redirect_uri:config.redirect_uris[0],
		scope:'https://www.googleapis.com/auth/gmail.labels',
		state:'some random string haha'
	}
	var uri=config.auth_uri+'?'+querystring.encode(parms);
	console.log(uri);
}

if (process.argv[2]==='token'){
	var config=JSON.parse(fs.readFileSync(',/config.json')).installed;
	var code= readline/question('Input returned code:');
	var parms={
		grant_type:'authrization_code',
		code: code,
		client_id:config.client_id,
		client_secret:config.client_secret,
		redirect_uri:config.redirect_uris[0]
	};
	var options={
		uri:config.token_uri,
		form:parms,
		json:true
	};
	request.post(options,function(error,response,body){
		if(responce.statusCode!==200){
			console.log("Error:",error);
			console.log("Status code:",response.statusCode);
			console.log("Body:",body);
			return false;
		}
		fs.writeFileSync(',/token.json',JSON.stringify(body));
	});
}

if (process.argv[2]==='labels'){
	var tokens=JSON.parse(fs.readFileSync(',/config.json'));
	var endpoint='https://www.googleapis.com/gmail/v1/users/me/labels';
	var params={
		access_token:tokens.access_token,
		prettyPrint:true
	};
	var options={
		uri:endpoint,
		qs:params,
		json:ture
	};
	request.get(options,function(error,response,body){
		if(responce.statusCode!==200){
			console.log("Error:",error);
			console.log("Status code:",response.statusCode);
			console.log("Body:",body);
			return false;
		}
		console.log(body,labels);
	});
}