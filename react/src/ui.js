import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './ui.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
const firebaseConfig = {
    apiKey: "AIzaSyC5gyr-paW_ZAOGQHiStx-7KyyXDNhms3I",
    authDomain: "md-license-manager.firebaseapp.com",
    databaseURL: "https://md-license-manager-default-rtdb.firebaseio.com",
    projectId: "md-license-manager",
    storageBucket: "md-license-manager.appspot.com",
    messagingSenderId: "501765483850",
    appId: "1:501765483850:web:a2dc44979f33ae31b7e5b3",
    measurementId: "G-W3SZL8VP8K"
};
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.countRef = (element) => {
            if (element)
                element.value = '4';
            this.textbox = element;
        };
        this.onCreate = () => {
            const count = parseInt(this.textbox.value, 10);
            var ref = uuidv4();
            console.log("Initializing config -- Init 1");
            firebase.initializeApp(firebaseConfig);
            console.log("Initializing config -- Init 2");
            var db = firebase.firestore();
            console.log("Initializing config -- Init 3");
            db.collection("loginAttempts").doc(ref).onSnapshot((doc) => {
                console.log("Initializing config -- Init 3.1");
                console.log("Current data: ", doc.data());
            });
            console.log("Initializing config -- Init 4.0");
            window.open('https://md-license-manager.web.app?ref=' + ref, '_blank');
            // parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
        };
        this.onCancel = () => {
            parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
        };
    }
    render() {
        return React.createElement("div", null,
            React.createElement("img", { src: require('./logo.svg') }),
            React.createElement("h2", null, "Rectangle Creator"),
            React.createElement("p", null,
                "Count: ",
                React.createElement("input", { ref: this.countRef })),
            React.createElement("button", { id: "create", onClick: this.onCreate }, "Create"),
            React.createElement("button", { onClick: this.onCancel }, "Cancel"));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('react-page'));
