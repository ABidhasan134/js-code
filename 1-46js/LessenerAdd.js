var head = document.querySelector("h1");
//finding the h1 tag
head.addEventListener("mouseover", function test1()
//adding the Event listener here mousover(hover)
{
    head.classList.add("heading");
    //
});
head.addEventListener("mouseout", function test1()
//here adding mouseout 
{
    head.classList.remove("heading");
});
