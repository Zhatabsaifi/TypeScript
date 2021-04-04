var InVoice = /** @class */ (function () {
    function InVoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    ;
    InVoice.prototype.format = function () {
        return '' + this.client + ' owns ' + this.amount + ' for ' + this.details;
    };
    return InVoice;
}());
export { InVoice };
