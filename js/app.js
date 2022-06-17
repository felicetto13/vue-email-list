new Vue(
    {
        el: "#app",
        data:
        {
            generateEmailList: [],
        },
        methods:
        {
            generateEmailRandom() {

                for (let i = 0; i < 10; i++) {
                    axios
                        .get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then((axiosResp) => {
                            const emailGenerate = axiosResp.data.response;
                            this.generateEmailList.push(emailGenerate);

                        })
                }

                console.log(this.generateEmailList);
            }
        }
    }
)