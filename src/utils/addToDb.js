const getStoreRedList = ()=>{
    const storedListStr = localStorage.getItem('read-list')
if(storedListStr){
    const storedList = JSON.parse(storedListStr)
 return storedList;

}else{

    return[];
}

}
const addToStoreRedList = (id)=>{
    const storedList = getStoreRedList();
    if(storedList.includes(id)){
        console.log(id)
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('read-list',storedListStr)
    
    
    }

}

export {addToStoreRedList,getStoreRedList}