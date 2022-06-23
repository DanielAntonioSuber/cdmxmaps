import 'dotenv/config'

import prisma from './services/prisma'
import initialSetup from './utils/initialSetup'
import app from './app'

async function main () {
  await initialSetup()
  app.listen(app.get('port'), () => {
    console.log('Api run in port', app.get('port'))
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
