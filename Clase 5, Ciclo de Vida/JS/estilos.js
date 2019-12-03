

const appClase5 = new Vue({
    //Link para el diagrama de ciclo de vida de VUE
    //https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
    el: "#app",
    data: {
        saludo: 'Ciclo de vida de vue'
    },
    //Se ejecuta antes del el y antes de ser instaciado VUE
    //es decir, antes del ... new Vue({})
    beforeCreate(){
        console.log('Metodo: beforeCreated')
    },
    created(){
        //Al crear los métodos, observadores y eventos,
        //pero aún no se puede acceder al DOM
        //Aún no se accede//lee el 'el'
        console.log('Método: created')
    },
    beforeMount(){
        //Se ejecuta cuando se va a insertar la info
        //en el DOM
        //Antes que se manipule la información
        console.log('Método: beforeMounted')
    },
    mounted(){
        //Se ejecuta al insertar en el DOM
        //Cuando se está manipulando la información
        console.log('Método: mounted')
    },
    beforeUpdate(){
        //Al detectar un cambio
        console.log('Método: beforeUpdate')
    },
    updated(){
        //Al realizar los cambios
        console.log('Método: update')
    },
    //Estas 2 funciones hacen que deje de funcionar esta instacia de VUE
    beforeDestroy(){
        //Antes de destruir la instancia
        console.log('beforeDestroy')
    },
    destroyed(){
        //Se destruye toda la instancia
        console.log('destroyed')
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
});