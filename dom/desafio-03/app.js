new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        resultado(){
            if (this.valor == 37){
                return 'Valor Igual a 37'
            } else {
                return 'Valor Diferente'
            }
        }
    },
    watch: {
        valor(){
            setTimeout(()=>{
                this.valor = 0
            }, 5000)
        }
    }
});