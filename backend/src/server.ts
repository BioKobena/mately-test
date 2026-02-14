import dotenv from 'dotenv'

dotenv.config()

import app from './app'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
  console.log(`API disponible sur: http://localhost:${PORT}`)
})