import React from 'react'

export default ({ children, ...rest }) => {
    return (
        <div classname="card" {...rest}>
            {children}
        </div>
    )
}