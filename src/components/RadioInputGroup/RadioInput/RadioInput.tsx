import classNames from 'classnames';
import type { FC } from 'react';

import {
  RadioButtonChecked,
  RadioButtonUnChecked,
} from '../../../assets/icons';

import variables from '../../../styles/scss/variables.module.scss';
import './RadioInput.scss';

const { prefix } = variables;

export type RadioInputOnChange = (id: string, value: string) => void;

export interface RadioInputProps {
  id: string;
  label: string;
  value: string;
  isChecked?: boolean;
  onChange: RadioInputOnChange;
}

export const RadioInput: FC<RadioInputProps> = ({
  id,
  label,
  value,
  isChecked,
  onChange,
}: RadioInputProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <li
    id={id}
    className={classNames(`${prefix}-radio-input`)}
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
    role="radio"
    aria-checked={isChecked}
    onClick={() => onChange(id, value)}
  >
    {isChecked ? <RadioButtonChecked /> : <RadioButtonUnChecked />}
    {label}
  </li>
);
