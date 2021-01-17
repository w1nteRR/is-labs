import { connection } from './database/connection'

import { classroom } from './database/models/classroom.model'
import { schedule } from './database/models/schedule.model'
import { student } from './database/models/student.model'

const init = async () => {
  const db = await connection()

  classroom(db).create({ 
    number: 13, 
    roominess: 100
  })

  student(db).create({ 
    first_name: 'Yura', 
    second_name: 'Korol' 
  })
  
  schedule(db).create({ 
    day_: 'Monday', 
    subject: 'English',
    time: '12:00' 
  })

  await db.sync()
}


init()