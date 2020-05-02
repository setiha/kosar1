class CartItem {
    constructor(name, count, basePrice) {
        this.name = name;
        this.count = count;
        this.basePrice = basePrice;
    }

    GetTotalPrice() {
        return this.count * this.basePrice;
    }

    static CanBeConstructed(name, count, basePrice) {
        if (!name) {
            return false;
        }
        if (!count) {
            return false;
        }
        if (!basePrice) {
            return false;
        }
        return true;
    }
}


