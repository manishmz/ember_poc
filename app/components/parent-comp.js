import Component from '@ember/component';

export default Component.extend({
    parentVal:'',
    actions:{
        update(updatedVal){
            this.set("parentVal",updatedVal);
        }
    }
});
