import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET(request, context){
    console.log(context)
    // console.log(context.params.id)
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(context.params.id)
        return NextResponse.json({message: "アイテム読み込み成功（シングル）", singleItem: singleItem})
    }catch{
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"})
    }
}