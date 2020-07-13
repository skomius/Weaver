import { connect } from 'ts-nats'

export const connectNats = async () => {
   
try {
        var cn = await connect({ url: 'http://localhost:4222' })
    }
    catch(err){
        console.log(err.message)
    };
  
    return cn 
} 