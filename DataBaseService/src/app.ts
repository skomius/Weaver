import {connectNats} from "../../CoreTs/app" 

  connectNats()
    .then(cn => { cn.subscribe('test', () => {console.log('recieved')})})
    .catch( e => console.log(e.message))

  console.log("done")



    

