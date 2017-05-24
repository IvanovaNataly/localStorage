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


function createApp() {
    localStorage.clear();
    let app = new AppComp();
    app.render();
}

createApp();
