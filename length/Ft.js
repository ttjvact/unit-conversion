import SI from "./SI.js"

export default class extends SI {
    constructor(value){
        super();
        this.value = value;
        this.si = 0.3048;
        return this;
    }
}
