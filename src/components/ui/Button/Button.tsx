import React, { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            isLoading = false,
            fullWidth = false,
            icon,
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={`btn btn--${variant} btn--${size} ${
                    fullWidth ? 'btn--full-width' : ''
                } ${isLoading ? 'btn--loading' : ''} ${className}`}
                disabled={isLoading || props.disabled}
                aria-busy={isLoading}
                {...props}>
                {icon && <span className="btn__icon">{icon}</span>}
                {children}
                {isLoading && (
                    <span className="btn__loader" aria-hidden="true" />
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
