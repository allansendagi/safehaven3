// seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  try {
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User'
      }
    })
    console.log('Created test user:', user)
  } catch (error) {
    console.error('Seeding error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed()