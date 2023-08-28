import React, { Component } from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'

import { Window, Overlay } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.hendleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendleKeyDown)
    }

    hendleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }
    
    render() {
        return createPortal(
            <Overlay
                onClick={this.onBackdropClick}
            >
                <Window>
                    {this.props.children}
                </Window>
            </Overlay>,
            modalRoot,
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

export default Modal