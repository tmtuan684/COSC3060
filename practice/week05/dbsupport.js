function getConnString(db) {
    // Change the connection string with connection string to your MongoDB altas
    return `mongodb+srv://<your DB account>:<your DB account password>@cosc3060.rqcqojz.mongodb.net/${db}?retryWrites=true&w=majority&appName=cosc3060`;
}

module.exports = { getConnString };