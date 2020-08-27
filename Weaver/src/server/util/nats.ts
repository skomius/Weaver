import { connect, NatsConnectionOptions, Payload } from 'ts-nats'
import { send } from 'process'

export const connectNats = async () => {
    return await connect({ url: 'http://localhost:4222' })
} 