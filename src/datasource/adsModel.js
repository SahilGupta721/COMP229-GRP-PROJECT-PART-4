class AdsModel {
    constructor(id, title, description, price, createdAt, expiresAt, isActive, owner) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
        this.isActive = isActive;
        this.owner = owner;
    }
}

export default AdsModel;
