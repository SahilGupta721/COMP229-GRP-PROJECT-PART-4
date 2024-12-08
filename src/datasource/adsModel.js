/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/

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
