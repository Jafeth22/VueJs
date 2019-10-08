const appVue = new Vue({
    el: '#app',
    //Dentro de este estarán los datos
    data: {
        titulo: 'Hola mundo con Vue',
        nuevaFruta: "",
        frutas: [{
                nombre: 'Piña',
                cant: 0
            }, {
                nombre: 'Mora',
                cant: 11
            },
            {
                nombre: 'Kiwi',
                cant: 22
            },
            {
                nombre: 'Manzana',
                cant: 33
            },
        ],
        totalFrutas: 0,
        persona: "",
        personas: [{
                value: 1,
                nombre: 'Jafeth'
            },
            {
                value: 2,
                nombre: 'Alejandro'
            },
            {
                value: 3,
                nombre: 'Jafeth'
            },
        ]
    },
    methods: {
        agregar() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cant: 0
            })
            //$('#txtNuevaFruta').val('');
            this.nuevaFruta = '';
        },
        banderaBtn(cant) {
            console.log("Entró")
            if (cant => 0) {
                return false;
            } else {
                return true;
            }
        }
    },
    /**
     * computed: Permite que se ejecute la función sola,
     * cuado detecta que ha cambiado algo en las propiedades
     */
    computed: {
        sumTotalFrutas() {
            this.totalFrutas = 0;
            for (data of this.frutas) {
                this.totalFrutas += data.cant;
            }
            return this.totalFrutas;
        }
    }
});