import AuthStore from 'stores/AuthStore'

// Singleton storeFactory
global.AuthStore = new AuthStore()

export default global
