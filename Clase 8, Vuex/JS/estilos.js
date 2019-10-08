Vue.component('titulo', {
    template: //html
    `
    <div>
        <!--Así se llama los métodos del VUEX-->
        <button class="btn btn-danger" @click="$store.commit('restar')">-</button>
        <!--De esta forma puedo usar o llamar a las variables de VUEX-->
        <h4>Número Padre: {{$store.state.numero}}</h4>
        <hijo></hijo>
    </div>
    `
});

Vue.component('hijo', {
    template: //html
    `
    <div>
        <button class="btn btn-primary" @click="$store.commit('aumentar')">+</button>
        <h4>Número Hijo: {{$store.state.numero}}</h4>
    </div>
    `
});

/**Instacia para poder usar VUEX, se va a almancenar en la variable declarada 
 * Esto sirve para poder usarlo en todos los componentes de VUE, es como una variable global
*/
const store = new Vuex.Store({
    state: {
        numero: 10
    },
    mutations: {
        aumentar(){
            this.state.numero++;
        },
        restar(){
            this.state.numero -= 2;
        }
    }
})

const app = new Vue({
    el: "#app",
    store, //store: store, es lo mismo que escribirlo solo una vez, además, es la forma para poder usar la variable de VUEX
    data:{
        
    }
})

