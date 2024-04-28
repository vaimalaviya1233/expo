import React, { cloneElement, ReactElement } from 'react';

type RadioGroupProps = {
  children: ReactElement[];
  name: string;
};

export function RadioGroup(props: RadioGroupProps) {
  const { children, name } = props;

  return (
    <div className="grid flex-1 grid-flow-row gap-2">
      {React.Children.map(children, child =>
        cloneElement(child, {
          name,
        })
      )}
    </div>
  );
}
