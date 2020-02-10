import { useState, useCallback, useEffect, useMemo } from 'react';

type TValue = any;
export type TFormValues = Record<string, TValue>;
export type TFormErrors = Record<string, string | undefined>;
export type TFormTouched = Record<string, boolean>;

export interface IUseFormProps {
  initialValues: TFormValues;
  onSubmit: (values: TFormValues) => void;
  onChange?: (values: TFormValues) => void;
  validate?: (values: TFormValues) => TFormErrors | Promise<TFormErrors>;
}

export interface IFieldProps {
  error: string | undefined;
  touched: boolean;
  value: TValue;
  onChange: (eventData: unknown) => void;
  onBlur: (eventData: unknown) => void;
}

export interface IUseFormValues {
  getFieldProps: (name: string) => IFieldProps;
  handleSubmit: (values: TFormValues) => void;
  invalid: boolean;
  errors: TFormErrors;
  touched: TFormTouched;
}

export const useForm = ({ initialValues, validate, onSubmit, onChange }: IUseFormProps): IUseFormValues => {
  const [values, updateValues] = useState(initialValues);
  const [errors, updateErrors] = useState<TFormErrors>({});
  const [touched, updateTouched] = useState<TFormTouched>({});

  const runValidation = async (formValues: typeof initialValues) => {
    if (validate) {
      const errors = await validate(formValues);
      updateErrors(errors);
    }
  };

  useEffect(() => {
    runValidation(values);
  }, []);

  const invalid = useMemo(() => !!Object.keys(errors).length, [errors]);

  const getFieldProps = useCallback(
    (name: string) => ({
      error: errors[name],
      touched: !!touched[name],
      value: values[name],
      onChange(value: unknown) {
        const newValues = { ...values, [name]: value };
        onChange && onChange(newValues);
        updateValues(newValues);
        runValidation(newValues);
      },
      onBlur() {
        updateTouched({ ...touched, [name]: true });
      },
    }),
    [errors, runValidation, touched, values],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      updateTouched(
        Object.keys(initialValues).reduce(
          (acc, key) => ({
            ...acc,
            [key]: true,
          }),
          {},
        ),
      );
      if (!invalid) {
        onSubmit(values);
      }
    },
    [invalid, onSubmit, values],
  );

  return {
    getFieldProps,
    invalid,
    handleSubmit,
    errors,
    touched,
  };
};
