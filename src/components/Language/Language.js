import React, {Component} from 'react';
import styles from './style.scss';
import { translate } from "react-i18next";


class Language extends Component {


    render() {
        const { i18n } = this.props;

        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        return(
            <div className={styles.languageButtons}>
                <div className="container">
                    <form onChange={(e) => changeLanguage(e.target.value)} className={[styles["switch"], styles["switch--vertical"]].join(' ')}>
                        <input value="en" id="radio-c" type="radio" name="second-switch" defaultChecked/>
                        <label htmlFor="radio-c">EN</label>
                        <input value="pl" id="radio-d" type="radio" name="second-switch"/>
                        <label htmlFor="radio-d">PL</label><span className={styles["toggle-outside"]}><span className={styles["toggle-inside"]}></span></span>
                    </form>
                </div>
            </div>
        );
    }
}


export default translate("translations")(Language);