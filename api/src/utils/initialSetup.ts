import { createAdmins } from '../services/user.services'
import { createDefaultAvatar } from '../services/image.services'

async function initialSetup () {
  await createDefaultAvatar()
  await createAdmins()
}

export default initialSetup
