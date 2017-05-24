class UserService {
    sendToLocalSt(data) {
        localStorage.setItem(data.name, JSON.stringify(data)); //data is object
    }

    getFromLocalSt(itemName) {
        return JSON.parse(localStorage.getItem(itemName));
    }
}


let service = new UserService();