const getStoreRedList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToStoreRedList = (id) => {
    const storedList = getStoreRedList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
};

const removeFromStoreRedList = (id) => {
    const storedList = getStoreRedList();
    const updatedList = storedList.filter(item => item !== id);
    const updatedListStr = JSON.stringify(updatedList);
    localStorage.setItem('read-list', updatedListStr);
};

export { addToStoreRedList, getStoreRedList, removeFromStoreRedList };