var photos=["21.jpg","3.jpg","4.jpg"];
var imgTag= document.querySelector("img");
var count=0;
function Next ()
{
    count++;//Index number 
    if(count>=photos.length)//when the index number high then length if will works
    {
        count=0;//if condition true then the count=0
        imgTag.src=photos[count];
    // here the img tag get source form the array index 
    }
    else
    {
        imgTag.src=photos[count]; //sening to index into the img tag

    }
}
function pre()
{
    count--;//this is revers prosses
    if(count<0)//count index number lessthen 0 then 
    {
        count=photos.length-1; // becouse of array this mathord is applicabel 
        imgTag.src=photos[count]; //sending to img tag array index
    }
    else 
    {
        imgTag.src=photos[count];
    }
}