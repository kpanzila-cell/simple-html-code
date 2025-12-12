let ar=[45,10,55,25,7]
    let large=ar[0]
    for(let ele of ar)
    {
        if(ele>large)
            large=ele
    }
    console.log("largest element is",large);
