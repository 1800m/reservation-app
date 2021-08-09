const dbname = 'reservation-app-prod'
module.exports = {
  // DB_URI: process.env.DB_URI
  DB_URI: `mongodb://localhost/${dbname}`
}
