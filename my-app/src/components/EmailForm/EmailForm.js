import React, {Component} from "react";
import emailjs from 'emailjs-com';
import { Button } from '../Button/Button';

class EmailForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                projectCompanyName: "",
                email: "",
                phone: "",
                foundingTeam: "",
                projectDuration: "",
                threedHelp: "",
                projectSpecial: "",
                gameChanger: "",
                goal: "",
                elseAdd: "",
                otherInfo: "",
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
                projectCompanyName: "",
                email: "",
                phone: "",
                foundingTeam: "",
                projectDuration: "",
                threedHelp: "",
                projectSpecial: "",
                gameChanger: "",
                goal: "",
                elseAdd: "",
                otherInfo: "",
            });
        };
        render() {
            return(
                <div>
                    <form
                        onSubmit={this.handleSubmit.bind(this)}
                        className="contact_form_class"
                    >
                        <div>
                            <label>Company / Project Name:</label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                placeholder="Enter Company / Project Name"
                                value={this.state.projectCompanyName}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter Phone Number"
                                value={this.state.phone}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>Name of the Team Founders:</label>
                            <input
                                type="text"
                                id="founders"
                                name="founders"
                                placeholder="Enter the Team Founders"
                                value={this.state.foundingTeam}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>How long have you been working on your project?</label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                placeholder="Enter the answer"
                                value={this.state.projectDuration}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>What do you think 3D can help you with?</label>
                            <input
                                type="text"
                                id="help"
                                name="help"
                                placeholder="Enter the answer"
                                value={this.state.threedHelp}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>What makes you (your project) special?</label>
                            <input
                                type="text"
                                id="special"
                                name="special"
                                placeholder="Enter the answer"
                                value={this.state.projectSpecial}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>What’s a game-changer about your project?</label>
                            <input
                                type="text"
                                id="changer"
                                name="changer"
                                placeholder="Enter the answer"
                                value={this.state.gameChanger}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>What is your goal?</label>
                            <input
                                type="text"
                                id="goal"
                                name="goal"
                                placeholder="Enter the answer"
                                value={this.state.goal}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>Anything else you would like to tell us?</label>
                            <input
                                type="text"
                                id="else"
                                name="else"
                                placeholder="Enter the answer"
                                value={this.state.elseAdd}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <div>
                            <label>Other information that would you like to add?</label>
                            <input
                                type="text"
                                id="otherInfo"
                                name="otherInfo"
                                placeholder="Enter the answer"
                                value={this.state.otherInfo}
                                onChange={this.handleChange.bind(this)}
                            ></input>
                        </div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            )
        }
    }

export default EmailForm;