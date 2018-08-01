import dialogComponent from './dialog';

const Dialog = {};

Dialog.install = function(Vue){
    Vue.component('v-dialog',dialogComponent);
}

export default Dialog;
