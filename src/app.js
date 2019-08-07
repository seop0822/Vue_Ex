import Vue from 'vue';
import Accordion from './component/Accordion.vue';


new Vue({
    el: '#app',
    components:{
        Accordion,
    },
    data: {
        items: [
            {id: 1, title: 'Title1', description: 'description for tab1'},
            {id: 2,title: 'Title2', description: 'description for tab2'},
            {id: 3,title: 'Title3', description: 'description for tab3'}
        ]
    }
});