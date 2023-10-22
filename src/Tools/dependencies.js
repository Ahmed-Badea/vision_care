class Dependencies {

    getCurrentLang = () => {
        if(localStorage.lang){
            return localStorage.lang
        }
        else{
            return "en"
        }
    }

}
export let  dependencies = new Dependencies()