import { TokenSigner } from 'jsontokens'

const getSignPayload = async(payload1: any) => {
    const signerKeyHex = "8df46e931a1917ea7a2b6c874b679cd903dca44f16c949659c9aa03849425da3"
    return new TokenSigner('ES256K', signerKeyHex).sign(payload1)
}
const payload1 = {"ram": "ramne"}
console.log(getSignPayload(payload1))