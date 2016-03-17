var http = require('http');
var fs = require('fs'); 

var myServer = http.createServer((req,res)=>{
	if (req.url = '/guitargod'){
		var vaiStream = fs.createReadStream('./assets/vai.mp4');
		vaiStream.pipe(res); 
	}
});

myServer.listen(8080); 