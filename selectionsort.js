function selectionsort(arr)
{
    for (let i = 0; i < arr.length-1; i++)
    {
        let temp = i;
       for (let j = i+1; j < arr.length; j++)
        {
            if (arr[j]<arr[temp]) 
            {
                temp = j
            }
              
         }
         swap(i,temp,arr)
         
    }
    return arr
}
function swap(i,j,arr)
{
    let dum=arr[i]
        arr[i]=arr[j]
        arr[j]=dum
}


const array=[9,1,8,2,7,3,6,4,5]

console.log(selectionsort(array))