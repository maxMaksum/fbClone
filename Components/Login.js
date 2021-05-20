import Image from 'next/image'
import {signIn} from 'next-auth/client'

function Login() {
    return (
        <div className="grid place-items-center">
            
            <Image
            src="/vercel.svg"
            width={300}
            height={300}
            objectFit='contain'
            />
            <div onClick={signIn} className="bg-blue-500 p-2 rounded-full text-white text-center cursor-pointer">Login With Facebook</div>
        </div>
    )
}

export default Login
