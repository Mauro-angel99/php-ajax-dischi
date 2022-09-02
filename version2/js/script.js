const app = new Vue({
    el: '#root',
    data: {
        discs: [],
        search: ''
    },
    methods: {
        searchDiscs() {
            axios.get(`api/discs?search=${this.search}`).then(res => {
                this.discs = res.data;
            });
        }
    },
    mounted() {
        this.searchDiscs()
    }
})