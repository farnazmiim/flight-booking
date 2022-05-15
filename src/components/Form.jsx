import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ onSubmit, children, className, options, id }) {
  const methods = useForm({
    ...options,
  });

  console.log(methods, "methods=====>");
  return (
    <div>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
        id={id}
      >
        {children(methods)}
      </form>
    </div>
  );
}
