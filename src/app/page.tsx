
import { getAllUsers } from "@/lib/api"
import { UserList } from "@/lib/components/user-list"
import { InputUser, IUser } from "@/lib/types"

export default function  Page(users:InputUser){
  const list=getAllUsers()
  return <>
    <h1>Home Page</h1>
    <UserList users={list}/>
  </>
}