import React, { useMemo } from "react";
import { Button, TextInput } from "atomic-elements";
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  RegisterOptions,
  useForm,
  useFormContext,
} from "react-hook-form";

interface FormProps<T> {
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  defaultValues?: DeepPartial<T>;
}

function Form<T extends FieldValues>({
  onSubmit,
  children,
  defaultValues,
}: FormProps<T>) {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

function useRegister(name: string, options: Partial<RegisterOptions>) {
  const { register } = useFormContext();

  return useMemo(() => {
    const registration = register(name, options);
    const onChange = registration.onChange;
    return {
      ...registration,
      onChange: (_value: string, event: any) => {
        onChange(event);
      },
    };
  }, [name]);
}

interface FormInputProps extends Partial<RegisterOptions> {
  name: string;
  label: string;
}

function FormTextInput({ name, label, ...options }: FormInputProps) {
  const {
    formState: { errors },
  } = useFormContext();
  const registerd = useRegister(name, options);
  const error = errors[name];

  const { required } = options;

  return (
    <TextInput
      {...registerd}
      size="large"
      label={label}
      error={error?.message as String}
      required={required as boolean}
    />
  );
}

Form.TextInput = FormTextInput;

export default function FormTesting() {
  return (
    <div>
      <Form onSubmit={(values) => console.log(values)}>
        <Form.TextInput
          name="name"
          label="First Name"
          maxLength={{ value: 10, message: "Must be 10 or less characters" }}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
