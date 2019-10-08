const app = new Vue({
    el: "#app",
    data:{
        titulo: "Gimnasio",
        tareas: [],
        nuevaTarea: ''
    },
    /**
     * Se ejecuta cuando carga el JS
     */
    created(){
        let datosLS = JSON.parse(localStorage.getItem('gym-vue'));
        if (datosLS == null) {
            this.tareas = [];
        }else{
            this.tareas = datosLS;
        }
    },
    methods:{
        agregarTarea(){
            if (this.nuevaTarea != '') {
                this.tareas.push({
                    nombre: this.nuevaTarea,
                    estado: false
                });
                this.nuevaTarea = '';
                localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            }
        },
        cambioColor(estado){
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
            return estado ? 'alert-success' : 'alert-danger';
        },
        cambioEstado(numElemento, estado){
            this.tareas[numElemento].estado = !estado;
        },
        eliminar(numElemento, nombre){
            Swal.fire({
                title: 'Información',
                html: `¿Desea eliminar el elemento <strong>${nombre}</strong>?`,
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
                    this.tareas.splice(numElemento, 1);
                    localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
                    Swal.fire({
                        type: 'success',
                        title: 'Información.',
                        text: 'Eliminado correctamente',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        }
    }
});
