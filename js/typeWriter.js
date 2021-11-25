document.addEventListener('DOMContentLoaded',function(event){
    // text with greeting note: may add other substrings to have an array display
    var greetText = "Hi, my name is Alexander!";

    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < (text.length)) {
            // add next character to greeting
            document.querySelector(".header__greeting").innerHTML = text.substring(0, i+1);

            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    function startTextAnimation() {
        if (typeof greetText == 'undefined'){
            setTimeout(function() {
                startTextAnimation();
            }, 20000);
        }

        
        if (greetText.length > 0) {
            typeWriter(greetText, 0, function() {
                // if array of texts being displayed
                // startTextAnimation(i + 1);
            });
        }
    }

    // future ref: set parameter if greetText holds string array
    startTextAnimation();
});