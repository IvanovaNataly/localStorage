cl = console.log;

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

 









