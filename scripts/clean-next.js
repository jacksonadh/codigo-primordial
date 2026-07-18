const fs = require('fs')
const path = require('path')

const nextDir = path.join(process.cwd(), '.next')

try {
  fs.rmSync(nextDir, { recursive: true, force: true })
  console.log('Removed .next cache')
} catch (error) {
  console.warn('Could not remove .next:', error.message)
  console.warn('Stop other Next.js processes and try again.')
  process.exit(1)
}
