import { connect, NatsConnectionOptions, Payload } from 'ts-nats'
import { send } from 'process'

export const connectNats = async () => {
   
try {
        var cn = await connect({ url: 'http://localhost:4222' })
    }
    catch(err){
        console.log(err.message)
    };
  
    return cn 
} 