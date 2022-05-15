import React from "react";

export default function FieldWrapper({ label, className, errors, children }) {
  console.log(errors, "----");
  return (
    <div>
      <label className={className}>
        {label}
        <div className="mt-1">{children}ij</div>
      </label>
      {errors && (
        <div
          role="alert"
          aria-label={errors.message}
          className="text-sm font-semibold text-red-500"
        >
          {errors.message}
        </div>
      )}
    </div>
  );
}
