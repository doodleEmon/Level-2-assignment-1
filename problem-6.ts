type Book = {
    title: string,
    author: string,
    publishedYear: number
};

const isRecentBook = (args: Book): boolean => {
    const date = new Date();
    const year = date.getFullYear();
    if (year - args.publishedYear <= 5) {
        return true;
    } else {
        return false;
    }
}

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};

isRecentBook(book1);
