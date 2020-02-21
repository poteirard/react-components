import React, { FC } from 'react';

import { IUseFormProps, useForm, FormContext } from './hooks';
import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';
import FormRadioField from './FormRadioField/FormRadioField';
import FormRadioGroupField from './FormRadioGroupField/FormRadioGroupField';
import FormDropdownField from './FormDropdownField/FormDropdownField';
import FormDropdownFilteredField from './FormDropdownFilteredField/FormDropdownFilteredField';
import FormComponent from './Form/Form';

interface IFormStatic {
  Button: typeof FormButton;
  CheckboxField: typeof FormCheckboxField;
  DropdownField: typeof FormDropdownField;
  DropdownFilteredField: typeof FormDropdownFilteredField;
  Form: typeof FormComponent;
  RadioField: typeof FormRadioField;
  RadioGroupField: typeof FormRadioGroupField;
  TextField: typeof FormTextField;
}

export const Form: IFormStatic & FC<IUseFormProps> = ({ initialValues, onSubmit, validate, onChange, ...rest }) => {
  const context = useForm({
    initialValues,
    onSubmit,
    validate,
    onChange,
  });
  return <FormContext.Provider value={context} {...rest} />;
};

Form.Button = FormButton;
Form.CheckboxField = FormCheckboxField;
Form.DropdownField = FormDropdownField;
Form.DropdownFilteredField = FormDropdownFilteredField;
Form.Form = FormComponent;
Form.RadioField = FormRadioField;
Form.RadioGroupField = FormRadioGroupField;
Form.TextField = FormTextField;

export * from './hooks';
