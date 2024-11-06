const getStoreRedList = () => {
  const storedListStr = localStorage.getItem("read-list");
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
    localStorage.setItem("read-list", storedListStr);
  }
};

const removeFromStoreRedList = (id) => {
  const storedList = getStoreRedList();
  const updatedList = storedList.filter((item) => item !== id);
  const updatedListStr = JSON.stringify(updatedList);
  localStorage.setItem("read-list", updatedListStr);
};

// Function to clear all data in the read-list
const clearStoreRedList = () => {
  localStorage.removeItem("read-list");
};



const getFavoriteList = () => {
  const storedListStr = localStorage.getItem("fav");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToFavoriteList = (id) => {
  const storedList = getFavoriteList();
  if (!storedList.includes(id)) {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("fav", storedListStr);
  }
};

const removeFavoriteList = (id) => {
  const storedList = getFavoriteList();
  const updatedList = storedList.filter((item) => item !== id);
  const updatedListStr = JSON.stringify(updatedList);
  localStorage.setItem("fav", updatedListStr);
};

// Function to clear all data in the read-list

export {
  addToStoreRedList,
  getStoreRedList,
  removeFromStoreRedList,
  clearStoreRedList,
  removeFavoriteList,
  addToFavoriteList,
  getFavoriteList

};
