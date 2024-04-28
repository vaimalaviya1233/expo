import { mergeClasses } from '@expo/styleguide';
import { ChangeEvent, forwardRef, ReactNode, Ref } from 'react';

import { P } from '../Text';

type Props = {
  id: string;
  name?: string;
  label: ReactNode;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = forwardRef(function Radio(
  { id, label, name, defaultChecked, checked, readOnly, className, onChange }: Props,
  ref?: Ref<HTMLInputElement>
) {
  return (
    <div className={mergeClasses('group grid flex-1 grid-cols-[auto,1fr] items-center', className)}>
      <input
        type="radio"
        id={id}
        ref={ref}
        name={name}
        defaultChecked={defaultChecked}
        readOnly={readOnly}
        checked={checked}
        data-label={typeof label === 'string' ? label : undefined}
        onChange={onChange}
        className={mergeClasses(
          'flex size-4 cursor-pointer items-center justify-center rounded-full border border-default bg-transparent shadow-xs transition',
          'outline-2 outline-offset-4 outline-palette-blue10 ring-palette-blue10 dark:outline-palette-blue8',
          'group-hover:border-palette-blue10 group-hover:bg-info group-hover:dark:border-palette-blue7',
          'group-focus-within:border-palette-blue10 group-focus-within:bg-info group-hover:dark:border-palette-blue7',
          !readOnly && 'cursor-pointer outline-0',
          (checked || defaultChecked) &&
            'after:size-2 after:rounded-full after:bg-palette-blue11 group-hover:after:bg-palette-blue10 dark:after:bg-palette-blue9 dark:group-hover:after:bg-palette-blue10',
          'checked:!border-palette-blue10 checked:!bg-info dark:checked:!border-palette-blue8'
        )}
      />
      {label && (
        <label htmlFor={id} className={mergeClasses('pl-2', !readOnly && 'cursor-pointer')}>
          {typeof label === 'string' ? <P>{label}</P> : label}
        </label>
      )}
    </div>
  );
});
