console.log("Q13:")
let count = 0;
let loading = setInterval(function() 
{
    console.log("Loading...");
    count++;
    if (count === 5)
    {
        clearInterval(loading);
        console.log("Loaded Successfully!");
    }
}, 1000);