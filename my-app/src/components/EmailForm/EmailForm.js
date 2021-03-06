import React, {Component} from "react";
import emailjs from 'emailjs-com';
import Navbar1 from '../Navbar/Navbar1';
import './EmailForm.css';

class EmailForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: "",
                email: "",
                phone: "",
                founding: "",
                duration: "",
                help: "",
                special: "",
                changer: "",
                goal: "",
                else: "",
                other: "",
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value});
        };
        handleSubmit = (e) => {
            e.preventDefault();
            emailjs
                .sendForm(
                    "service_z61um7b",
                    "template_duy5njb",
                    ".contact_form_class",
                    "user_Z7978hi0eHHi5W786Hih3",
                )
                .then()
                .catch();
            this.setState({
                name: "",
                email: "",
                phone: "",
                founding: "",
                duration: "",
                help: "",
                special: "",
                changer: "",
                goal: "",
                else: "",
                other: "",
            });
        };
        render() {
            return(
                <>
                <Navbar1/>
                <div className="container1">
                    <form
                        onSubmit={this.handleSubmit.bind(this)}
                        className="contact_form_class"
                    >
                        <div className="contact-box">
                            <div className="right">
                            <h2>Tell us about your project:</h2>
                        <div className="form-line">
                            <label>Company / Project Name:</label>
                            <input
                                type="text"
                                className="field"
                                id="projectName"
                                name="projectName"
                                placeholder="Enter Company / Project Name"
                                value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>                       
                        <div className="form-line">
                            <label>Email:</label>
                            <input
                                type="text"
                                className="field"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>Phone:</label>
                            <input
                                type="text"
                                className="field"
                                id="phone"
                                name="phone"
                                placeholder="Enter Phone Number"
                                value={this.state.phone}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>Name of the Team Founders:</label>
                            <input
                                type="text"
                                className="field"
                                id="founders"
                                name="founders"
                                placeholder="Enter the Team Founders"
                                value={this.state.founding}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>How long have you been working on your project?</label>
                            <input
                                type="text"
                                className="field"
                                id="duration"
                                name="duration"
                                placeholder="Enter the answer"
                                value={this.state.duration}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>What do you think 3D can help you with?</label>
                            <input
                                type="text"
                                className="field"
                                id="help"
                                name="help"
                                placeholder="Enter the answer"
                                value={this.state.help}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>What makes you (your project) special?</label>
                            <input
                                type="text"
                                className="field"
                                id="special"
                                name="special"
                                placeholder="Enter the answer"
                                value={this.state.special}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>What’s a game-changer about your project?</label>
                            <input
                                type="text"
                                className="field"
                                id="changer"
                                name="changer"
                                placeholder="Enter the answer"
                                value={this.state.changer}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>What is your goal?</label>
                            <input
                                type="text"
                                className="field"
                                id="goal"
                                name="goal"
                                placeholder="Enter the answer"
                                value={this.state.goal}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>Anything else you would like to tell us?</label>
                            <input
                                type="text"
                                className="field"
                                id="else"
                                name="else"
                                placeholder="Enter the answer"
                                value={this.state.else}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div className="form-line">
                            <label>Other information that would you like to add?</label>
                            <input
                                type="text"
                                className="field"
                                id="otherInfo"
                                name="otherInfo"
                                placeholder="Enter the answer"
                                value={this.state.other}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <button type="submit" className="btn">SUBMIT</button>
                        </div>
                        </div>
                    </form>
                    
                </div>
                </>
            )
        }
    }

export default EmailForm;