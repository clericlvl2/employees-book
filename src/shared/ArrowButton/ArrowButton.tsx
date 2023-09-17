import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { clsx } from 'clsx';

export interface ArrowButtonProps extends ComponentPropsWithoutRef<'button'> {
  direction?: 'up' | 'down';
}

const ArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
  function ArrowButton(
    { children, direction = 'up', className, ...props },
    ref
  ) {
    return (
      <button
        className={clsx(
          {
            ['dark:bg-light-arrow-up bg-arrow-up']: direction === 'up',
            ['dark:bg-light-arrow-down bg-arrow-down']: direction === 'down',
          },
          'box-border min-h-[20px] min-w-[20px] appearance-none bg-neutral-400 bg-[length:12px_12px] bg-center bg-no-repeat leading-[1.2] text-neutral-900 transition-colors duration-200 hover:cursor-pointer hover:bg-neutral-400/80 dark:bg-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-600/80',
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default ArrowButton;
