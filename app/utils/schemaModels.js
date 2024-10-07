import mongoose from "mongoose"

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    title: String,
    image: String,
    price: String,
    description: String,
    email: String
})

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


// export const ItemModel = mongoose.model("Item", ItemSchema)
export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)
// export const UserModel = mongoose.model("User", UserSchema)
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)


// データ保存前に、Schemaを作って、new Schema({})に
// 保存するデータの形と種類を定義
// モデル作成