

    export class Url extends URL  {
       
        constructor(url: string){
            super(url, location.protocol + location.hostname)
        }

    }
