

const appClase5 = new Vue({
    el: "#app",
    data: {
        mensaje: "",
        contador: 0,
    },
    //Datos que van a tener lógica
    computed:{
        msjInvertido(){
            /**
             * split: separa el string, devuelve un array
             * reverse: le da vuelta
             * join: une lo array
             */
            return this.mensaje.split("").reverse().join('');
        },
        colorBarra(){
            return {
                'bg-danger': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador <= 20,
                'bg-success': this.contador > 20
            }
        }
    },
    methods: {
        sumar(){
            this.contador++;
        },
        restar(){
            this.contador--;
        },
    }
});

const ventanas5020 = new Vue({
    el: "#ventanas5020",
    data: {
        ancho: 0,
        alto: 0,
    },
    computed: {

    },
    methods: {
        ventanaSencilla(){
            var txtSuperior = document.getElementById('txtSuperior');
            var txtInferior = document.getElementById('txtInferior');
            var txtLatDerecho = document.getElementById('txtLatDerecho');
            var txtLatIzquierdo = document.getElementById('txtLatIzquierdo');
            if (this.ancho == "") {
                this.ancho = 0;
            }
            if (this.alto == "") {
                this.alto = 0;
            }
            var superior = (this.ancho * this.alto) * 2;
            var inferior = (this.ancho * this.alto) / 2;
            var lateralDer = superior + 5;
            var lateralIzq = inferior - 5;

            txtSuperior.value = superior;
            txtInferior.value = inferior;
            txtLatDerecho.value = lateralDer;
            txtLatIzquierdo.value = lateralIzq;
        }
    }
});