import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll("user").then(res=>{console.log(res)});//await this.getUsers();
        console.log(users);
        return users;
    },
    async getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }
});

