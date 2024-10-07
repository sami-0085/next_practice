import { NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
// データ受け取り、渡す。CRUD操作の為
export async function POST(request){

    const reqBody = await request.json()
    // console.log(reqBody)
    // console.log(`フロントから受け取ったリクエストを表示: ${JSON.stringify(reqBody)}`)

    try{
        // console.log(await request.json())
        await connectDB()
        await ItemModel.create(reqBody)
        return NextResponse.json({message: "アイテム作成成功"})
    } catch{
        return NextResponse.json({message: "アイテム作成失敗"})
    }
}

