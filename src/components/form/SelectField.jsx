import FieldWrapper from "./FieldWrapper";

export default function SelectField({
  type = "text",
  label,
  className,
  registration,
  errors,
  options,
}) {
  return (
    <div className="InputField">
      <FieldWrapper errors={errors}>
        <label className="block mb-1 form__label">{label}</label>
        <select type={type} className={className} {...registration}>
          {options.map(({ label, value }) => (
            <option key={label?.toString()} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    </div>
  );
}
