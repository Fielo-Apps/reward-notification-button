import { LightningElement } from 'lwc';

export default class MxCheckForNotificationButton extends LightningElement {
    handleClick() {
        try {
            document.dispatchEvent(new CustomEvent('mxrewardnotification__update', {}));
            console.log('event fired!');
        } catch (error) {
            console.error(error);
        }
    }
}