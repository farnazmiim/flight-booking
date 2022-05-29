import FieldWrapper from "./FieldWrapper";

export default function InputField({
  type = "text",
  label,
  className,
  registration,
  errors,
  placeholder,
}) {
  return (
    <div className="InputField">
      <FieldWrapper errors={errors}>
        <label className="block mb-1 form__label">{label}</label>
        <input
          type={type}
          className={className}
          {...registration}
          placeholder={placeholder}
        />
      </FieldWrapper>
    </div>
  );
}
