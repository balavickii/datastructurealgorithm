function bubblesort(arr)
{
    if(arr.length<=1)
    {
        return arr
    }
    for (let i = 0; i < arr.length-1; i++) 
    {
        for (let j = 0; j < arr.length-i-1; j++)
         {
           if (arr[j]>arr[j+1])
            {
            const temp = arr[j];
                  arr[j]=arr[j+1]
                  arr[j+1]=temp
            }
        }
        
    }
    return arr
}


const array=[9,1,8,2,7,3,7,4,6,5]

const sorted= bubblesort(array)
console.log(sorted)