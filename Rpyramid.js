//var n=prompt("Limit");
var n=prompt("Enter the limit");
for(var i=0;i<n;i++)
{   var space='';
    var res='';
    for(var j=1;j<=i;j++)
  {    document.write('&nbsp;');}
    for(var j=n-i;j>=1;j--)
   res+="* ";
  document.write(res);
  document.write('<br/>');
}