

    export class Url extends URL  {
       
        constructor(url: string){
            super(url, location.protocol + location.hostname + ":" + location.port );
        }

    }

    export const createObjectFromFormData = (formData: FormData) => {

        let obj = {}

        for(const i of formData.keys()){
            Object.defineProperty(obj, i, {
                value: formData.get(i),
                enumerable: true
            })
        
        }

        console.log(obj)

        return obj
    }


