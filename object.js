let stud={'name':'manu','marks':67,'sub':'AI'}
console.log("stud object:",stud);
console.log(typeof(stud));
console.log("name:",stud.name);
stud.name="manu v"
console.log("stud object aftr update:",stud);
stud.grade="B"
console.log("stud object after addition:",stud);
delete stud.sub
console.log("stud object after delete:",stud);
for(let i in stud){
    console.log(i)
}