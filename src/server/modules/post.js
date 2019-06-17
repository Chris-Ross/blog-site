class Post {
    constructor(title, body, author, publishDate, category, tag) {
        this._title = title;
        this._body = body;
        this._author = author;
        this._publishDate = publishDate;
        this._category = category;
        this._tag = tag;
    }

    get title() {
        return this._title;
    }

    get body() {
        return this._body;
    }

    get author() {
        return this._author;
    }

    get publishDate() {
        return this._publishDate;
    }

    get category() {
        return this._category;
    }

    get tags() {
        return this._tag;
    }
}

module.exports = Post;