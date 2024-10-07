import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request){
    // console.log("ミドルウェア")
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTcyODI4NTE2Nn0.SogwLK-pqhDnXdxtlwuwC3Y-isdgdqPdAc9o1VO1Q30"
    // await request.headers.get("Authorization")?.split(" ")[1]
    // console.log(token)
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token, secretKey)
        // console.log("decodedJwt:" , decodedJwt)
        return NextResponse.next()
    }catch{
    return NextResponse.json({message: "トークンが正しくないので、ログインしてください"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"],
}