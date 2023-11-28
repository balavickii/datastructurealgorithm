function quicksort(arr,low=0,high=arr.length-1)
{
    if (low<high)
     {
        const pivotindex=partition(arr,low,high)
        quicksort(arr,low,pivotindex-1)
        quicksort(arr,pivotindex+1,high)
    }
    return arr

}
function partition(arr,low,high)
{
    const pivot=arr[low]
    let start = low
    let end = high
    while(start < end)
    {
       while(arr[start] <= pivot)
       {
           start++
       }
       while( arr[end] > pivot ) 
       {
           end--
       }
       if(start < end)
       {
          swap(arr,start,end)
       }
    }
    swap(arr,low,end)
    return end
    
    
}

function swap(arr,i,j)
{
    const temp = arr[i]
          arr[i]=arr[j]
          arr[j]=temp
}

const array=[9,1,8,2,7,3,6,4,5]
const sorted=quicksort(array)
console.log(sorted)