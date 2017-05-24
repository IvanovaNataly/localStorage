cl = console.log;

class UserService {
    sendToLocalSt(data) {
        localStorage.setItem(data.name, JSON.stringify(data)); //data is object
    }

    getFromLocalSt(itemName) {
        return JSON.parse(localStorage.getItem(itemName));
    }
}

class UserDetailsComp{
    constructor(data) {
        this.data = data;//obj
        this.faces = ["default.png", "andrew.png", "jan.png", "pat.png", "nataly.png"]
    }

    catchFace() {
        let name = this.data.name.toLowerCase() + ".png";
        let faceIndex = this.faces.indexOf(name);
        let pic = "";
        if (faceIndex === -1) {
            pic = this.faces[0];
        } else {
            pic = this.faces[faceIndex];
        }
        return pic;
    }

    render() {
        let $html = $(`
            <img src="images/${this.catchFace()}" class="profile-pic" alt="Profile Picture">
            <div class="details">
                <h2 class="details-name">${this.data.name}</h2>
                <div class="details-item">
                    <span>Website: </span>
                    <a href="http://">${this.data.url}</a>
                </div>
                <div class="details-item">
                    <span>Rating: </span>
                    <span>${this.data.rating}</span>
                </div>
            </div>
        `);
        return $html;
    }
}

class FormComp {
    constructor() {
        this.$name = $("#name");
        this.$url = $("#url");
        this.$rating = $("#rating"); 
        this.$get =  $("#get");
        
    }

    getName() {
        return this.$name[0].value;
    }
    
    getData() {
        let data = {};
        data.name = this.$name[0].value;
        data.url = this.$url[0].value;
        data.rating = this.$rating[0].value; 
        return data;    
    }

    secondaryOpen() {
        $("#detailsSecondary").slideToggle();
    }

    onUserClick(e) {
        this.onCallback(this.userData);
    }

    onUserSelected(callback) {
        this.onCallback = callback;
    }

    receiveData(e){
        e.preventDefault();
        let userData = this.getData(); //obj
        this.onCallback(userData);
        this.clearForm();
        service.sendToLocalSt(userData);
        $("#get").off("click");
        $("#get").on("click", this.supplyData.bind(this));
    }

    supplyData(e) {
        e.preventDefault();
        let itemName = this.getName();
        let localState = service.getFromLocalSt(itemName); 
        
        if (!localState) {
            cl("No item");
            this.secondaryOpen();
            $("#get").off("click");
            $("#get").on("click", this.receiveData.bind(this));
        }
        else {
            cl("Item");
            let userData = service.getFromLocalSt(itemName);
            this.onCallback(userData);; //obj
        }
    }

    clearForm() {
        this.secondaryOpen();
        this.$url[0].value = "";
        this.$rating[0].value = "";
    }
    
    clearName() {
        this.$name[0].value = "";
    }

    render() {
        this.$get.on("click", this.supplyData.bind(this));
        this.$name.on("click", this.clearName.bind(this));
    }
}

class AppComp {
    appendForm() {
        let form = new FormComp();  
        form.render();
        form.onUserSelected( this.appendUserDetails.bind(this) );
    }
    
    appendUserDetails(userData) {
        $("#userDetails").empty();
        let userDetailsComp = new UserDetailsComp(userData); //obj
        $("#userDetails").append(userDetailsComp.render());
    }

    render() {
        this.appendForm();
    }
}

let service = new UserService();

function createApp() {
    localStorage.clear();
    let app = new AppComp();
    app.render();
}

createApp();










