import { Minus, Plus } from '@phosphor-icons/react';
import * as React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export interface InputNumberProps {
  containerProps?: React.HTMLProps<HTMLLabelElement>;
  value: number;
  onChange: (count: number) => void;
}

const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ containerProps, value, onChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value);

    React.useEffect(() => {
      setInternalValue(value);
    }, [value]);

    const handleIncrementDecrement = (action: number) => {
      const newValue = internalValue + action;
      if (newValue >= 1) {
        setInternalValue(newValue);
        onChange(newValue);
      }
    };

    return (
      <label
        {...containerProps}
        className="flex w-full justify-between items-center gap-1 rounded bg-base-button p-3 lg:w-[71px]"
      >
        <Button
          type="button"
          variant="ghost"
          size="ghost"
          onClick={() => handleIncrementDecrement(-1)}
          disabled={internalValue === 1}
        >
          <Minus className="size-4 text-product-purple shrink-0 hover:text-product-purple-dark hover:scale-110 transition-all" />
        </Button>
        <Input
          type="tel"
          className="text-center bg-base-button outline-none w-[20px] text-base-title text-text-base select-none"
          min={1}
          value={internalValue}
          readOnly
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="ghost"
          onClick={() => handleIncrementDecrement(1)}
        >
          <Plus className="size-4 text-product-purple shrink-0 hover:text-product-purple-dark hover:scale-110 transition-all" />
        </Button>
      </label>
    );
  },
);

InputNumber.displayName = 'InputNumber';
export { InputNumber };
