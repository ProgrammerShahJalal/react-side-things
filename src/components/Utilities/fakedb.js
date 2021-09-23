// use local storage as your database for now
const addDb = id => {
    const exists = getDb();
    let shopping_card = {};
    if (!exists) {
        shopping_card[id] = 1;
    }
    else {
        shopping_card = JSON.parse(exists);
        if (shopping_card[id]) {
            const newCount = shopping_card[id] + 1;
            shopping_card[id] = newCount;
        }
        else {
            shopping_card[id] = 1;
        }
    }
    updateDb(shopping_card);
}
const getDb = () => localStorage.getItem('shopping_card');
const updateDb = card => {
    localStorage.setItem('shopping_card', JSON.stringify(card));
}
const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shopping_card = JSON.parse(exists);
        delete shopping_card[id];
        updateDb(shopping_card);
    }
}
export { addDb, removeFromDb };