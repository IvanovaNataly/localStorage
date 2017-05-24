class UserDetailsComp{
    constructor(data) {
        this.data = JSON.parse(data);
    }

    render() {
        let $html = $(`
            <h2>${this.data.name}</h2>
            <div>
                <span>Website: </span>
                <a href="http://">${this.data.url}</a>
            </div>
            <div>
                <span>Rating: </span>
                <span>${this.data.rating}</span>
            </div>
        `);
        return $html;
    }
}
