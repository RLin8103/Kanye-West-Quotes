document.getElementById("generateQuote").addEventListener("click", function(event) {
    event.preventDefault();

    const url = "https://api.kanye.rest";
    
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            
            let result = "<div id='quoteContent'>";
            result += "<blockquote>";
            result += "<p id='quotetext'>";
            result += "<q>";
            result += json.quote;
            result += "</q>";
            result += "</p>";
            result += "<cite>&#8212; Kanye West</cite>";
            result += "</blockquote>";
            result += "</div>";
    

            document.getElementById("quote").innerHTML = result;
        });
});