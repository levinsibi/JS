
var n=5;
for(var i=1;i<=n;i++)
{   var space='';
    var res='';
    for(var j=n-i;j>=1;j--)
   {space+=" "} 
    
    for(var j=0;j<i;j++)
   res+="* ";
   console.log(space+res);
  
}