export default class {
    to(unit){
        this.result = this.value * new unit().si / this.si;
        return this;
    }
}