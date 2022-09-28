var quotes = ["You will travel to many exotic places in your lifetime.", 
"If you have something good in your life, don't let it go!", 
"What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
"Fortune favors the brave."
];

function displayQuote(){
	var qAmount = quotes.length;

	var randQuote = Math.floor(Math.random() * qAmount) + 0; 
	var quote = quotes[randQuote];

	$("#dispQuote").html(quote);
}
