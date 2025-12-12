let num=Number(prompt("enter the amount"));
if(num<1000)
{
    document.writeln("no discount")
}
else if(num>1000 && num<= 2000){
    document.writeln("3% discount")

}
    else if(num>2000 && num<= 5000)
    {
        let discount=3/100*num
        document.writeln("discount amount:",disc)
        document.writeln("net payable amount:",(num-disc))
    }
    else{
        let discount=10/100*num0
        document.writeln("discount amount:",disc)
        document.writeln("net payable amount:",(num-disc))
    }
    
