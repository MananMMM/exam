"use server"

import Database from "better-sqlite3"
import { InputUser, IUser } from "./types"

const db=new Database("test.db")
export const addUser=()=>{
db.prepare(`
      INSERT INTO users(name,surname,username,salary)
      VALUES(@name,@surname,@username,@salary)
    `).all()
}

export const getAllUsers= ()=>{
    db.prepare(`
        SELECT * FROM users
        `).all()
}