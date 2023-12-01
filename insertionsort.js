function insertionsort(arr)
{
   if(arr.length<=1)
   {
      return arr
   }
     for (let i = 1; i < arr.length; i++) 
     {
        const temp = arr[i];
        let j=i-1
        while (j>=0 && arr[j]> temp)
        {
           arr[j+1] = arr[j] 
           j-- 
        }
        arr[j+1]= temp
     }
     return arr
}

const array=[9,1,8,2,7,3,6,4,5]

console.log(insertionsort(array))
