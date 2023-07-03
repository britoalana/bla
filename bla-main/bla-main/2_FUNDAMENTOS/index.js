const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

const parseUrl = new url.URL(address)
console.log(parseUrl)