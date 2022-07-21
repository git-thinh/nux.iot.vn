const middleware = {}

middleware['content'] = require('..\\middleware\\content.ts')
middleware['content'] = middleware['content'].default || middleware['content']

export default middleware
