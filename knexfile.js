// DO NOT CHANGE THIS FILE
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/recipes.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
}

// SELECT
//     ig.ingredient_name,
//     re.recipe_name,
//     si.quantity,
//     st.step_number,
//     re.id as recipe_id,
//     st.id as step_id,
//     st.step_instructions,
//     si.ingredient_id
// FROM step_ingredients as si
// INNER JOIN steps as st
// on si.step_id = st.id
// INNER JOIN ingredients as ig
// on si.ingredient_id = ig.id
// INNER JOIN recipes as re
// on re.id = st.recipe_id
// WHERE re.id = 1