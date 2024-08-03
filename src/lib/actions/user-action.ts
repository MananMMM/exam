"use server"
import { redirect } from "next/navigation"
import { addUser } from "../api"
import { InputUser, IUser } from "../types"


interface IProps{
    params:IUser
}


export const handleAdd= async (prev:unknown,data:FormData)=>{
    if (!data.get("name") || data.get("surname")|| data.get("username") || data.get("salary")){
        return {
            message:"Please fill all the fields"
        }
    }

 const salaryType=parseInt(data.get('salary'))
 
    if(isNaN(salaryType)){
        return{
            message:"Salary must be a number"
        }
    }

    if(data.get('username')){
        return{
            message:"User is already exists"
        }
    }

    addUser()
    redirect("/")

}
