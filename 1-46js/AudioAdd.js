for(var i=0;i<3;i++)
{
    document.querySelectorAll(".myBotton")[i].addEventListener("click", function ()
    //select class and find classs add Listener then add a anonimous function
    {
        var text = this.innerHTML;//this property bear the current text of function
        console.log(text);//test that this methord is working 
        audioPlay(text);//sening to function argument
        playAni(text);

    });
    
}
function audioPlay(text)//recive as text if we went we can be give other name 
{
    switch (text)//as same as function declar
    {
        case"a":
        var audio= new Audio ("1s.mp3");//for adding audio 
        audio.play();//we play the audio what we have add befor
        break;
        
        case"b":
        var audio = new Audio("2s.mp3");
        audio.play();
        break;
        
        case"c":
        var audio = new Audio("3s.mp3");
        audio.play();
        break;
       
    }
}
document.addEventListener("keypress",function(event)
//keypress for take intup or press from keybrod
{
    var press= event.key;//this is recive from keybord
    audioPlay(press);
});
function playAni(text)//not working 
{
    var ani=document.querySelector("."+text);
    ani.classList.add("anime");
}