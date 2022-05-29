import FieldWrapper from "../form/FieldWrapper";

export default function RadioField({
  type = "text",
  label,
  className,
  registration,
  errors,
  id,
  value,
}) {
  return (
    <div className="InputField">
      <FieldWrapper errors={errors}>
        <input
          type={type}
          className={className}
          {...registration}
          value={value}
        />
        <label htmlFor={id} className="form__radio">
          {label}
        </label>
      </FieldWrapper>
    </div>
  );
}
