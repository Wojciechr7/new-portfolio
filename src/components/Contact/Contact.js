import React, {Component} from 'react';
import styles from './style.scss';
//import bs from 'bootstrap/scss/bootstrap.scss';
import cnt from './css/main.css';
import img from "./images/icons/symbol-01.png";
import {Form} from "../../classes/Form";



export default class Contact extends Component {

    formSender;


    /*    constructor() {
            super();
        }*/

    // TODO reduce image weight
    render() {
        return (
            <section className={styles.contactContainer}>
                <div className={styles.background}></div>
                <header>CONTACT</header>
                <div className={cnt.wrapContact100}>
			<span className={cnt["contact100-form-symbol"]}>
				<img src={img} alt="SYMBOL-MAIL"/>
			</span>

                    <form
                        className={[cnt["contact100-form"], cnt["validate-form"], cnt["flex-sb"], cnt["flex-w"]].join(' ')}>
				<span className={cnt["contact100-form-title"]}>
					Drop Me A Message
				</span>

                        <div className={[cnt["wrap-input100"], cnt["rs1"], cnt["validate-input"]].join(' ')}
                             data-validate="Name is required">
                            <input id="sender-name" className={cnt["input100"]} type="text" name="name"
                                   placeholder="Name"/>
                            <span className={cnt["focus-input100"]}></span>
                        </div>

                        <div className={[cnt["wrap-input100"], cnt["rs1"], cnt["validate-input"]].join(' ')}
                             data-validate="Email is required: e@a.z">
                            <input id="sender-mail" className={cnt["input100"]} type="text" name="email"
                                   placeholder="Email Address"/>
                            <span className={cnt["focus-input100"]}></span>
                        </div>

                        <div className={[cnt["wrap-input100"], cnt["validate-input"]].join(' ')}
                             data-validate="Message is required">
                            <textarea id="sender-text" className={cnt["input100"]} name="message"
                                      placeholder="Write Me A Message"></textarea>
                            <span className={cnt["focus-input100"]}></span>
                        </div>

                        <div className={cnt["container-contact100-form-btn"]}>
                            <button id="form-button" onClick={this.handleSend} className={cnt["contact100-form-btn"]}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }

    componentDidMount() {
        this.formSender = new Form();
    }

    handleSend = () => {
        let msg = {
            name: document.getElementById('sender-name').value,
            email: document.getElementById('sender-mail').value,
            text: document.getElementById('sender-text').value
        };

        this.formSender.send(msg);
    }


}

