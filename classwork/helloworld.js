var http = require("http");
var urlParser = require("url");
var server = http.createServer().listen(3002);
console.log("I'm listening on port: 3002");
server.on("request", function(request, response){
    console.log(request.url);
    var urlObject = urlParser.parse(request.url);
    var pathname = urlObject.pathname;
    console.log("requested: "+ pathname);
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(pathname === "/fun-times"){
        response.write("<html><h1>fun times</h1>");
        response.write("<script>console.log('good vibrations');</script>");
        response.write("</html>");
        response.end();
    } else if(pathname === "/favorite-movie"){
        response.write("<html><h1>Favorite Movie</h1>");
        response.write("<p>Probably going to say Emporer's New Groove</p>");
        response.write("<img src='http://az616578.vo.msecnd.net/files/2017/03/06/6362438913195200811617700965_4ed.jpg'></img>");
        response.write("</html>");
        response.end();
    } else if(pathname === "/portfolio"){
        response.write("<html><h1>Coming Soon</h1>");
        response.write("</html>");
        response.end();
    }
    else {
        response.write("<html><h1>404! PAGE NOT FOUND</h1>");
        response.write("<script>console.log('could not find the page you were looking for');</script>");
        response.write("<img src='http://im12.it/g/17292'></img>");
        response.write("</html>");
        response.end();
    }
});
