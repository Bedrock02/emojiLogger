function prependZero(number) {
  return number > 9 ? `${number}` : `0${number}`
}

function getCurrentTime() {
  const today = new Date()
  const hours = today.getHours()
  const minutes = today.getMinutes()
  const formatHour = prependZero(hours)
  const formatMinutes = prependZero(minutes)
  return `${formatHour}:${formatMinutes}`
}

function getCurrentDate() {
  const today = new Date()
  return today.toUTCString()
}

export {
  getCurrentDate,
  getCurrentTime
}