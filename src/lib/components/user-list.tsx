
import { InputUser, IUser } from "../types";

export const UserList = (users: IUser[]) => {
  return (
    <div>
      {users.map(user =>{ return <div> (
        <div key={user.id}>
          <strong>Name: {user.name}</strong>
          <strong>Surname: {user.surname}</strong>
          <p>Salary: {user.salary} AMD</p>
        </div>
      ) </div>})}
    </div>
  );
};
