import React from "react";
import Form from "../components/Form";
import InputField from "../components/InputField";

export default function Home() {
  return (
    <div>
      <Form
        onSubmit={async (values) => {
          console.log(values);
          // await login(values);
          onSuccess();
        }}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              errors={formState.errors["email"]}
              registration={register("email", {
                required: "email is required.",
              })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <InputField
              type="password"
              label="Password"
              errors={formState.errors["password"]}
              registration={register("password", {
                required: "password is required.",
              })}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div>
              <button type="submit" className="w-full">
                Log in
              </button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
}
