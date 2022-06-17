new Vue(
    {
        el:"#app",
        data:
        {
            generateEmailList: []
        },
        methods:
        {
            generateEmailRandom (){

                axios
                .get("https://github.com/felicetto13/vue-email-list.git")
                .then((axiosResp)=>{
                    for (let i = 0; i < 10; i++){
                        this.generateEmailList.push(axiosResp.data.response);
                    }
                    
                })
            }
        }
    }
)