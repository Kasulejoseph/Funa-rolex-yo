class AllQueries {
    static createUser() {
        return `
        CREATE TABLE IF NOT EXISTS users(
            id UUID PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            phone_number TEXT NOT NULL,
            address TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
        `
    }
    static dropTable() {
        return `DROP TABLE IF EXISTS users`
    }

    static rolexTable() {
        return `
        CREATE TABLE IF NOT EXISTS rolex(
            id UUID PRIMARY KEY,
            supplier_id UUID NOT NULL,
            name TEXT NOT NULL,
            components TEXT ARRAY,
            price INTEGER[4],
            quantity TEXT[4],
            Description TEXT,
            FOREIGN KEY(supplier_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
        )
        `
    }
}

export default AllQueries