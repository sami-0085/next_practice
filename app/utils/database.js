import mongoose from "mongoose";

const connectDB = async() => {
    try{
    await mongoose.connect("mongodb+srv://nsakuma:4lc9e9B3X0kTcWpS@cluster0.uikdh.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: DB接続成功")
    }catch{
        console.log("Failure: DB接続失敗")
        throw new Error()
    }
}

export default connectDB

// データベースと接続する処理
// 失敗した時の処理　JS（tyr,catch）
// utils:有用、役にたつ