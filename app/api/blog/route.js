import { Post } from "@/lib/models"
import { connectDB } from "@/lib/utils"
import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {
        connectDB();

        const posts = await Post.find();
        return NextResponse.json(posts);
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to get posts")
    }
}