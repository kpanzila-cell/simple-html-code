let marks=[34,56,70,18,25]
console.log("complete array",marks);
console.log("type:",typeof(marks));
console.log("1st ele",marks[0]);
console.log("last ele",marks[4]);
marks[0]=44
console.log("updated array",marks);
marks.push(77)
console.log("array after addition",marks);
marks.pop(25)
console.log("array after deletion",marks);
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}