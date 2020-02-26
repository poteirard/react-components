import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import Text from '../../atoms/Text/Text';
import InputText from '../../atoms/InputText/InputText';
import InputLabel from '../../atoms/InputLabel/InputLabel';
import SizedContainer from '../../layout/SizedContainer/SizedContainer';
import { typography } from '../../../constants/typography';
import { colors } from '../../../constants/colors';
import { IField } from '../../types';

export interface ITextFieldProps extends IField<HTMLInputElement> {
  prefix?: string;
}

export interface IPrefixProps {
  prefix: string;
}

export interface IContainerProps {
  withError?: boolean;
}

export interface ILabelProps {
  withHelpText?: boolean;
}

const Container = styled(SizedContainer)<IContainerProps>`
  ${({ withError }) => withError && `margin-bottom: 5px;`}
`;

const Label = styled(InputLabel)<ILabelProps>`
  ${({ withHelpText }) => withHelpText && `margin-bottom: 0;`}
`;

const HelpText = styled(Text).attrs({
  size: 'small',
})`
  margin-bottom: 5px;
  display: block;
`;

const Prefix = styled.span<IPrefixProps>`
  position: relative;
  display: block;
  
  &::before {
    content: '${({ prefix }: IPrefixProps) => prefix}';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: ${typography.sizes.text.base};
    color: ${colors.neutral.dark};
  }
  
  input {
    padding-left: 24px;
  }
`;

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ label, errorMessage, isValid, inputProps, size, helpText, prefix }, ref) => {
    const { name } = inputProps;

    if (!name) {
      throw Error('Name must be set in inputProps. Check the docs.');
    }

    if (prefix && prefix.length > 1) {
      throw Error('Prefixes can only have one character');
    }

    const input = (
      <InputText
        id={`text-id-${name}`}
        type="text"
        hasError={!!errorMessage}
        isValid={isValid}
        aria-label={label ? undefined : name}
        ref={ref}
        {...inputProps}
      />
    );

    return (
      <>
        {label && (
          <Label withHelpText={!!helpText} htmlFor={`text-id-${name}`}>
            {label}
          </Label>
        )}
        {helpText && <HelpText size="small">{helpText}</HelpText>}
        <Container withError={!!errorMessage} size={size}>
          {prefix ? <Prefix prefix={prefix}>{input}</Prefix> : input}
        </Container>
        {errorMessage && <ErrorMessage data-automation={`ZA.error-${name}`}>{errorMessage}</ErrorMessage>}
      </>
    );
  },
);

export default TextField;
