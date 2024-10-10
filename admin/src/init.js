const sdk = require('node-appwrite')

// Init SDK
const client = new sdk.Client()
const databases = new sdk.Databases(client)

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('agilemate')
  .setKey(process.env.VITE_APPWRITE_API_KEY)


async function init() {
  // const database = await databases.create('agilemate', 'Agilemate')
  const database = await databases.get('agilemate')
  const retrospectives = await databases.getCollection('agilemate', 'retrospectives')
  // const retrospectives = await databases.createCollection('agilemate', 'retrospectives', 'Retrospectives')

  const createAttribs = false
  if (createAttribs) {
    await databases.createStringAttribute(database.$id, retrospectives.$id, 'title', 255, true);
    await databases.createStringAttribute(database.$id, retrospectives.$id, 'description', 255, false, 'This is a description');
    await databases.createStringAttribute(database.$id, retrospectives.$id, 'content', 4000, false, '{}');
  }

  // const sessions = await databases.createDocument('agilemate', 'retrospectives', sdk.ID.unique(), { 'title': 'Test title' }, [sdk.Permission.write(sdk.Role.user('user1'))])
  // await databases.createDocument('agilemate', 'retrospectives', sdk.ID.unique(), { 'title': 'Test title 1' }, [sdk.Permission.write(sdk.Role.user('user1'))])
  const sessions = await databases.createDocument('agilemate', 'retrospectives', 'sessions', { 'title': 'User 1' }, [sdk.Permission.read(sdk.Role.users()), sdk.Permission.write(sdk.Role.user('user1'))])
  console.log(sessions)
}

init()