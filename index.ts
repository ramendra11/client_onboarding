import { TokenSigner } from 'jsontokens'

const getSignPayload = async(payload) => {
    const signerKeyHex = "your-private_key"
    return new TokenSigner('ES256K', signerKeyHex).sign(payload)
}
const payload = {"ramendra": "ramendra"} // The paylod to be signed 
console.log(getSignPayload(payload))
