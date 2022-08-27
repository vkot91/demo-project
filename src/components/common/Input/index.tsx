import { forwardRef } from 'react';

export interface Props {
  error?: string;
  label: string;
  id: string;
  type: string;
  name: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, label, id, type, name }: Props, ref) => {
    return (
      <div className="form__element">
        <label htmlFor={id} className="form__element--title">
          {label}
        </label>
        <input className="form__element--input" name={name} type={type} ref={ref} id={id} />
        {error && <div className="form__element--error">{error}</div>}
      </div>
    );
  }
);
