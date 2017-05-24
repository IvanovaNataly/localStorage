class App {


}

    
function createForm() {
    let form = new FormComp();
    form.onClick();
}

function appendForm() {

}

function renderUser() {
    
}


$("#send").on("click", function () {service.sendToLocalSt(form.render()) });
$("#get").on("click", function () {
    let userData = service.getFromLocalSt("Nataly");
    let userDetailsComp = new UserDetailsComp(userData);
    //let details = userDetailsComp.render();
    //console.log(details);
    $("#userDetails").append(userDetailsComp.render());
}).bind(this);