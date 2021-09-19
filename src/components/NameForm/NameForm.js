import React from 'react';
import { Control } from '../Control';
import { Button } from '../Button';
import styles from './NameForm.module.scss';

export class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            taste: 'none',
            firstName: '',
            lastName: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTaste = this.handleChangeTaste.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleChange(event){
        this.setState({ value: event.target.value })
    }

    handleChangeTaste(event){
        this.setState({ taste: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        alert('Your full name is: ' + this.state.firstName + ' ' + this.state.lastName);
    }

    render(){
        return(
            <form
                onSubmit={this.handleSubmit}
                className={styles.wrapper}
            >
                <Control
                    inputType="input"
                    type="text"
                    name="firstName"
                    labelText="First name"
                    onChange={this.handleInputChange}
                    value={this.state.firstName}
                />
                <Control
                    inputType="input"
                    type="text"
                    name="lastName"
                    labelText="Second name"
                    onChange={this.handleInputChange}
                    value={this.state.lastName}
                />
                <Control
                    labelText="Feedback"
                    inputType="textarea"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <label className={styles.customSelect}>
                    <select value={this.state.taste} onChange={this.handleChangeTaste}>
                        <option value="none">Choose taste:</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <Button type="submit" size="small">Submit</Button>
            </form>
        );
    }
};
