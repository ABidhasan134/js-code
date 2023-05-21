//adding function
function highscore(score)
{
    var max=score[0];
    for(var i=0; i<score.lenth;i++)
    {
    if(max<score[i])
    {
        max=score[i];
        
    }
}
   
}
var number=[55,56,22,88,77];
var maxhigh= highscore(number);
console.log(maxhigh);
