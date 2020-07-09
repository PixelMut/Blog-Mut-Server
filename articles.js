const ARTICLES = require("./shared/mock-articles");

module.exports = function(app) {
    app.get("/articles", function(request, response){
        console.log('Getting all the articles');
        response.send(ARTICLES)
    });

    app.get("/articles/:key", function(request, response){
        console.log('getting the '+ request.params.key + ' article');
        response.send(
            ARTICLES.filter(article=>article.key === request.params.key)[0]
        );
    });


};