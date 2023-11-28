function mergesort(arr,low=0,high=arr.length-1)
{
    if (low<high) {
        const mid = Math.floor((low+high)/2)
        const lefthalf=mergesort(arr,low,mid)
        const righthalf=mergesort(arr,mid+1,high)
        return merge(lefthalf,righthalf)
    }
    
    return [arr[low]]
}

function merge(lefthalf,righthalf)
{
    let temp=[]
    let left=0
    let right=0
    while (left < lefthalf.length && right < righthalf.length) 
    {
       if (lefthalf[left]<righthalf[right])
        {
           temp.push(lefthalf[left])
           left++
       } 
       else
        {
           temp.push(righthalf[right])
           right++
       } 
    }
    temp= temp.concat(lefthalf.slice(left),righthalf.slice(right))

    return temp
}

const array=[9,1,8,2,7,3,6,4,5]
const sortedarray=mergesort(array)
console.log(sortedarray) 