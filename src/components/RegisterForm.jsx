import React from 'react';

export default class RegisterForm extends React.Component {

    state = {
        username: '',
        password: '',
        email:'',
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = e => {
        const { requestRegister, history } = this.props;
        e.preventDefault();

        var formBody = [];
        for (var property in this.state) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(this.state[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        requestRegister({
            fields: formBody,
            callback: () => {
                history.push('/');
            },
        })
        this.setState({
            username: '',
            password: '',
            email:'',
        });
    };

    render() {
        return (
            <form>
                <input
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    type="text"
                    placeholder="E-Mail"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}