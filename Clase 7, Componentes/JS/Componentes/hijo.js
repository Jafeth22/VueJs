Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Número que viene del Padre: {{numero}}</h4>
        <!--Va a enviar la info hace el comp Padre-->
        <h4>1-Nombre hijo: {{nombreHijo}}</h4>
        <input type="text" v-model="nombreHijo" placeholder="Escriba algo">
    </div>
    `,
    /**Los props son para poder mostrar la información que se recibe entre componentes y después añadirlos, estos se deben de guardar primero en un ARRAY y luego se usa */
    props:['numero'],
    data(){
        return {
            nombreHijo: ""
        }
    },
    /**Se ejecuta una vez que el DOM se haya leído */
    mounted(){
        /**Se va enviar algo
         * También, el nombre que está de primero, es el que va a recibir el padre
         */
        this.$emit('nombrePadreHijo', this.nombreHijo);
    },
    /*beforeUpdate(){
        Swal.fire({
            title: 'Información',
            html: `¿Desea cambiar el elemento <strong>${this.nombreHijo}</strong>?`,
            type: 'warning',
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonColor: '#00c80c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI',
            cancelButtonText: 'NO',
        }).then((result) => {
            if (result.value) {
                ///splice(posicionAEliminar, cantElementosAEliminar);
                this.$emit('nombrePadreHijo', this.nombreHijo);
                localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
                Swal.fire({
                    type: 'success',
                    title: 'Información.',
                    text: 'Actualizado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    },*/
    updated(){
        this.$emit('nombrePadreHijo', this.nombreHijo);
    }
})