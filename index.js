var querystring, convert, util, axios, functions, callback;

querystring = require( 'querystring' );
util = require( 'util' );
axios = require( 'axios' );
converter = require( 'xml-js' );
functions = require( './functions.js' );
callback = function( err, response){
	if( err )throw err;
}
//configurations set now.
var namecheap = function (key, user, ip, site){
	this.key = key;
	this.user = username = user;
	this.ip = ip;
	this.site = site;
	//this.link = site + 'ApiUser='+user+'&ApiKey='+ key + '&UserName=' + user + '&';
	this.defaults = {};
}

namecheap.prototype.Domain  = {
	check: {
		function(DomainList, callback ){
			tld = this.check.tld;
			DomainList = this.check.DomainList;
			//url
			var url = this.site + 'ApiUser=' + this.site.user + '&ApiKey=' + this.site.key + '&Username=' + this.site.user + '&Command=namecheap.domains.check&ClientIp=' + this.site.ip + '&DomainList=' + DomainList ;
			/*axios.get( url );
				.then (function( response ){
					//get the response in JSON
					var result1 = convert.xml2json(response, {compact: true, spaces: 4});
					console.log( result1 )
					return result1;
				});*/
		}
	}
}