import FieldWrapper from "./FieldWrapper";

export default function InputField({
  type = "text",
  label,
  className,
  registration,
  errors,
}) {
  console.log(errors, "errors");
  return (
    <div className="InputField">
      <FieldWrapper label={label} errors={errors}>
        <input type={type} className={className} {...registration} />
      </FieldWrapper>
    </div>
  );
}
