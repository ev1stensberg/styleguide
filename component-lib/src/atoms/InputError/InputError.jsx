import React from 'react';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const InputError = ({ className, children, ...rest }) => (
    <span
        className={classnames('input-error', {
            [className]: className
        })}
        {...rest}>
        {children}
    </span>
);

export default InputError;