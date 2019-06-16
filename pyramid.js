//var n=prompt("Limit");
var n=prompt("Enter the limit");
for(var i=1;i<=n;i++)
{   var space='';
    var res='';
    for(var j=n-i;j>=1;j--)
  {    document.write('&nbsp;');}
    for(var j=0;j<i;j++)
   res+="* ";
  document.write(res);
  document.write('<br/>');
}