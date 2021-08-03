const appli = {
    data() {
        return {
            valueH1: "Titre h1",
            valueH2: "Titre h2",
            isRed: false,
            showImg: false,
            newText: "",
        }
    },
    methods: {
        refresh_h2() {
            this.valueH2 = this.newText;
        }
    }
}

Vue.createApp(appli).mount('#app')