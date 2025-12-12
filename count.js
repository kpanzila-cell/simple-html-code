
let sum=0
for(let i=1;i<=1000;i=i+2)
{
    if(i%5==0)
        continue
sum=sum+i
}
document.writeln(sum)