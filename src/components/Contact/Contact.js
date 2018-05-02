import React, {Component} from 'react';
import styles from './style.scss';
import cnt from './css/main.css';
import img from "./images/icons/symbol-01.png";
import {Form} from "../../classes/Form";
import { translate } from "react-i18next";


class Contact extends Component {

    formSender;


    /*    constructor() {
            super();
        }*/

    // TODO reduce image weight
    render() {
        const { t } = this.props;
        return (
            <section className={styles.contactContainer}>
                <header>CONTACT</header>
                <div className={cnt.wrapContact100}>
			<span className={cnt["contact100-form-symbol"]}>
				<img src={img} alt="SYMBOL-MAIL"/>
			</span>

                    <form
                        className={[cnt["contact100-form"], cnt["validate-form"], cnt["flex-sb"], cnt["flex-w"]].join(' ')}>
				<span className={cnt["contact100-form-title"]}>
					{t("Drop Me A Message")}
				</span>

                        <div className={[cnt["wrap-input100"], cnt["rs1"], cnt["validate-input"], cnt["alert-validate"]].join(' ')}
                             data-validate={t("Name is required")}>
                            <input id="sender-name" className={[cnt["input100"], "input100"].join(' ')} type="text" name="name"
                                   placeholder={t("Name")}/>
                            <span className={cnt["focus-input100"]}></span>
                        </div>

                        <div className={[cnt["wrap-input100"], cnt["rs1"], cnt["validate-input"]].join(' ')}
                             data-validate={t("Email is required")}>
                            <input id="sender-mail" className={[cnt["input100"], "input100"].join(' ')} type="text" name="email"
                                   placeholder={t("Email Address")}/>
                            <span className={cnt["focus-input100"]}></span>
                        </div>

                        <div className={[cnt["wrap-input100"], cnt["validate-input"]].join(' ')}
                             data-validate={t("Message is required")}>
                            <textarea id="sender-text" className={[cnt["input100"], "input100"].join(' ')} name="message" placeholder={t("Write Me A Message")}></textarea>
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
            date: new Date().toLocaleString('pl'),
            name: document.getElementById('sender-name').value,
            email: document.getElementById('sender-mail').value,
            text: document.getElementById('sender-text').value
        };

        this.formSender.send(msg);
    }


}

export default translate("translations")(Contact);