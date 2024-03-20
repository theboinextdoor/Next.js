import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"



export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        console.log(reqBody)
        const {username , email , password} = reqBody;


        // check if user is already exist or not 
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exists"}, {status : 400})
        }

        
        // password Hashing
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password , salt)
        
        
        // saving the user Data to the database
        const newUser = new User({
            username,
            email,
            password : hashedPassword,
        })

        // we will save the data to the database
        const savedUser = await newUser.save();
        console.log(savedUser)


        // return the response to the client that user is successfully created....
        return NextResponse.json(
            {
                message : "User created successfully",
                success : true,
                savedUser
            })



    } catch (error : any) {
        return NextResponse.json({error : error.message}, {status : 500})
    }
}