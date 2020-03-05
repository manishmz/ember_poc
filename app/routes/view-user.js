import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const userId = params.user_id;
        this.user = await this.getUsersById(userId);
        return this.user;
    },
    async getUsersById(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return await response.json();
    },
    actions: {
        showUsername(){
            alert(`${this.user.username}`);
        }
    }
});
