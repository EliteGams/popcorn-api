// Import the necessary modules.
import mongoose from 'mongoose'

import ShowModel from './ShowModel'
import showSchema from './showSchema'

// Attach the functions from the classes to the schemas.
showSchema.loadClass(ShowModel)

/**
 * The show model.
 * @ignore
 * @type {Show}
 */
export default mongoose.model(ShowModel, showSchema, 'shows')
