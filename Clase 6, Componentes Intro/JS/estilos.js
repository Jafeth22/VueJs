/**De esta se crea un componente */
Vue.component('saludo',{
    //Siempre tendrán un TEMPLATE
    //Todo dentro del TEMPLATE, se deberá de cerrar con un DIV/contenedor
    template: //html
    `
    <div>
        <h2>{{saludo}}</h2>
        <h3>Hola mundo</h3>
    </div>    
    `,
    //data: función que va a retornar datos
    data(){
        return {
            saludo: "Hola Vue"
        }
    }
})

Vue.component('contador',{
    template: //html
    `
    <div>
        <h3>{{numero}}</h3>
        <button class='btn btn-primary' @click="numero++">+</button>
        <button class='btn btn-danger' @click="numero--">-</button>
    </div>
    `,
    data(){
        return{
            numero: 0,
        }
    }
})

const appClase6 = new Vue({
    el: "#app",
});