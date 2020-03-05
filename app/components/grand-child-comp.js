import Component from '@ember/component';

export default Component.extend({
    actions:{
        changeVal(){
            this.changeParentVal(this.textVal);
            this.set("textVal", '');
        }
    }
});
