import React from "react";
import Registration from "../Components/Account/Registration/Registration";

const Register = () => {
  return (
    <div>
      <div className="bg-blue-950 border-b-2 border-white">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center">
            <h3>Register</h3>
          </div>
        </div>
      </div>
      <Registration />
    </div>
  );
};

export default Register;
