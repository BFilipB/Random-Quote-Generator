
$(document).ready(function(){
   	
   
    var randomQuote;
    var randomNum;
    var Author;
  $("#tweet").on("click",function(){
     window.open("https://twitter.com/intent/tweet?text="+randomQuote+ "   "+Author);
   });
  
     
    getQuote();
  function getQuote(){
    var arrayofQuotes = ["Biceps are like ornaments on a Christmas tree","Sell yourself short on nutrition and you’re selling yourself short on maximizing your physique development.” ","Our love for what you do and willingness to push yourself where others aren't prepared to go is what will make you great.","If your waist measurement begins with a 2...EAT!"];
    var arrayofAuthors = ["Ed Coan","Ernie Taylor","Laurence Shahlaei"," SCStrong"];
    randomNum=Math.floor((Math.random()*arrayofQuotes.length));
    randomQuote=arrayofQuotes[randomNum];
    Author=arrayofAuthors[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text(Author);

  
   
   $("#newQuote").on("click",function(){
     getQuote();
   });
     
  
  };
})
                       

            
                  

  
