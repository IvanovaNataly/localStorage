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