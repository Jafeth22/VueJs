Vue.component('padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <button class='btn btn-primary' @click="numeroPadre++">+</button>
        <button class='btn btn-danger' @click="numeroPadre--">-</button>
        <h2>Número Padre: {{numeroPadre}}</h2>
        <h2>Nombre que viene del hijo: {{nombrePadre}}</h2>
        <!--Esto es como hacer un v-bind-->
        <!--Recibe la información del Hijo, con $event y luego la guarda en la variable local, en este caso nombrePadre, la información la recibe y almacena en la variable que está entre comillas-->
        <hijo :numero="numeroPadre"  @nombrePadreHijo="nombrePadre = $event"></hijo>
    </div>
        `,
    data(){
        return{ 
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})