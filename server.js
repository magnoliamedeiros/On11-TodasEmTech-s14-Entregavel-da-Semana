const app = require('./src/app')
const PORT = 3030

// conectar ao bd
const db = require('./src/data/database')

// usando a funcao exportada
db.con()

// subir o servidor
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))