import React from 'react'
import PropTypes from 'prop-types'
import { LoadMore , Span} from './Button.styled'

const Button = ({onClick}) => {
    return (
        <LoadMore
            type='button'
            onClick={onClick}
        >
            <Span>
                Load more
            </Span>
        </LoadMore>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button