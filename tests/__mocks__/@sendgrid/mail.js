module.exports = {
  setApiKey() {
    return new Promise((resolve) => {
      console.log('setAPIkey')
      resolve({ data: {} });
    })
  },
  send() {
    return new Promise((resolve) => {
      console.log('send')
      resolve({ data: {} });
    })
  }
}