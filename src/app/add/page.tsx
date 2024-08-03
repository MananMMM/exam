"use client";

import { handleAdd } from "@/lib/actions/user-action";
import { useActionState } from "react";


export default function Page() {
  const [state, handleAddAction] = useActionState(handleAdd, { message: "" });
  return (
    <>
      <h1>Add User</h1>
      <div className="columns">
        <div>
          <form className="box" action={handleAddAction}>
            {state?.message && <p style={{ color: "red" }}>{state.message}</p>}
            <div>
              <input
                type="text"
                name="name"
                className="input is-rounded"
                placeholder="enter a name"
              />
            </div>
            <div>
              <input
                type="text"
                name="surname"
                className="input is-rounded"
                placeholder="enter a surname"
              />
              <div>
                <input
                  type="text"
                  name="username"
                  className="input is-rounded"
                  placeholder="enter a username"
                />
                <div>
                  <input
                    type="text"
                    name="salary"
                    className="input is-rounded"
                    placeholder="enter a salary"
                  />
                </div>
              </div>
            </div>
            <button className="button is-link">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}
