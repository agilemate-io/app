import { Client, Databases } from 'appwrite'

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('agilemate')

const databases = new Databases(client)

const result = await databases.listDocuments(
  'agilemate', // databaseId
  'retrospective', // collectionId
  [] // queries (optional)
)

console.log(result)
