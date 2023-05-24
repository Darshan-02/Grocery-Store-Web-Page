var numOfBuyButton = document.querySelectorAll(".click-button").length;
for(var i=0;i<numOfBuyButton;i++){
    document.querySelectorAll(".click-button")[i].addEventListener("click",function(){
        alert("Thank you for purchasing.");
    });
}

var reviewOfItems = document.querySelectorAll(".shop-rating").length;
for(var i=0;i<numOfBuyButton;i++){
    document.querySelectorAll(".shop-rating")[i].addEventListener("click",function(){
        var a = prompt("Please give us a review");
        var result;
        if(a.length === 0){
            alert("Thank You");
        }
        else{
            alert("Thank You for the review");
        }
    });
}

var inputButton = document.querySelectorAll(".help-button").length;
for(var i=0;i<inputButton;i++){
    document.querySelectorAll(".help-button")[i].addEventListener("click",function(){
        alert("Message Received");
        
    });
}
