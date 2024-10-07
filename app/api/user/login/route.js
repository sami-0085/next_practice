import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(request){
    const reqBody = await request.json()
    // console.log(reqBody)
    try{
    await connectDB()
    const savedUserData = await UserModel.findOne({email: reqBody.email})
    console.log(savedUserData)
    // データが存在する場合の処理
    if(savedUserData){
        // パスワードが正しい場合
        if(reqBody.password === savedUserData.password){
            const secretKey = new TextEncoder().encode("next-market-app-book")
            const payload = {
                email: reqBody.email
            }
            const token = await new SignJWT(payload)
                .setProtectedHeader({alg: "HS256"})
                .setExpirationTime("1d")
                .sign(secretKey)

            return NextResponse.json({message: "ログイン成功", token: token})
        }
        else{
            return NextResponse.json({message: "ログイン失敗：パスワードが間違っています"})
        }
    }else{
    return NextResponse.json({message: "ログイン失敗：ユーザー情報を登録してください"})
    }
    }catch{
        return NextResponse.json({message: "ログイン失敗"})
    }
}