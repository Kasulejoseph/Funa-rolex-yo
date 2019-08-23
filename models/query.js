class AllQueries {
    /* TO DO*/
    // Add is_supplier
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
    /* TO DO*/
    // Add status active, images

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
    static updateRorelex() {
        return `
        UPDATE rolex SET 
        name = $1,
        components = $2,
        price = $3,
        quantity = $4,
        Description = $5,
        modified_date = $6
        WHERE id = $7 AND supplier_id = $8 returning *
        `;
    }
    static insertRolex() {
        return `
        INSERT INTO rolex(id, supplier_id, name, components, price, quantity, Description)
        VALUES($1, $2, $3, $4, $5, $6, $7) returning *
        `;
    }
    static insertUser() {
        return `
        INSERT INTO users(id, first_name, last_name, phone_number, address, email, password)
        VALUES($1, $2, $3, $4, $5, $6, $7) returning *
        `;
    }
}

export default AllQueries