import React from 'react';
import { BaseModal } from './BaseModal';
import { Button } from '../Button';
import styles from './Modal.module.scss';

export const Modal1 = ({ onRequestClose, ...otherProps }) => (
    <BaseModal onRequestClose={onRequestClose} {...otherProps}>
        <div className={styles.div}>I am a First modal</div>
        <Button size="small" onClick={onRequestClose}>Close</Button>
    </BaseModal>
);
