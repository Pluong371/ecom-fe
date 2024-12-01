import React, { useState } from "react";
import { Input } from "antd";
export const Account = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
    const handleSubmit = () => {
      if (newPassword !== confirmPassword) {
        setError("Passwords do not match!");
      } else {
        setError("");
        // Thực hiện các hành động khác như gửi dữ liệu lên server
        console.log("Passwords match!");
      }
    };
  return (
    <div className="flex flex-col  w-full">
      <h1 className="font-semibold text-2xl ">Account Details</h1>
      <div className="mt-6 flex flex-col gap-3 my-2">
        <h2>First Name</h2>
        <Input type="text" className="w-2/3" />
      </div>
      <div className="flex flex-col gap-3 my-2">
        <h2>Last Name</h2>
        <Input type="text" className="w-2/3" />
      </div>
      <div className="flex flex-col gap-3 my-2">
        <h2>Display Name</h2>
        <Input type="text" className="w-2/3" />
        <p className="text-gray-400 text-sm">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div>
      <div className="flex flex-col gap-3 my-2">
        <h2>Email </h2>
        <Input type="text" className="w-2/3" />
      </div>
      <div className="flex flex-col gap-3 my-2">
        <h1 className="font-semibold text-2xl mt-4">Password</h1>
        <div className="flex flex-col gap-3 my-2">
          <h2>Old Password</h2>
          <Input type="text" className="w-2/3" />
        </div>
        <div className="flex flex-col gap-3 my-2">
          <h2>New Password</h2>
          <Input
            type="password"
            className="w-2/3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 my-2">
          <h2>Confirm New Password</h2>
          <Input
            type="password"
            className="w-2/3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          className="bg-black w-1/6 text-white px-3 py-3 rounded-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};
export default Account;
