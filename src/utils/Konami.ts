import { eggs } from './eggs';

class Konami {
    private kkeys = [];
    private konami = '38,38,40,40,37,39,37,39,66,65';
    private listeners = [eggs];

    constructor() {
        if (window && window.addEventListener) {
            window.addEventListener(
                'keydown',
                (e) => {
                    if (this.kkeys.length < this.konami.split(',').length) {
                        this.kkeys.push(e.keyCode);
                    } else {
                        // Remove first element.
                        this.kkeys.shift();
                        this.kkeys.push(e.keyCode);
                    }
                    if (this.kkeys.toString().indexOf(this.konami) >= 0) {
                        this.kkeys = [];
                        this.listeners.forEach((listener) => {
                            listener();
                        });
                    }
                },
                true
            );
        }
    }

    /**
     * Add listener function which will be triggered as soon as the Konami code has been entered.
     * @param listener Callback function is called upon Konami code detection.
     */
    addListener(listener: () => void) {
        this.listeners.push(listener);
    }

    /**
     * Remove a previously registered listener from the register.
     * @param listener Previously registered listener
     */
    removeListener(listener: () => void) {
        this.listeners = this.listeners.filter(
            (registeredListener) => listener !== registeredListener
        );
    }
}

export { Konami };
