new Vue({
    el: '#desafio',
    data: {
        first_value: '',
        second_value: '',
    },
    methods: {
        showAlert(){
            alert('Exibindo Alert !')
        },
        receiverValue1(){
            this.first_value = event.target.value
        },
        receiverValue2(){
            this.second_value = event.target.value
        }
    }
})