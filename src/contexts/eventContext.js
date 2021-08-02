import {
  createContext,
  useContext,
  useState,
} from 'react'


const EventContext = createContext()

function EventProvider({ children }) {
  const [events, setEvents] = useState([])
  const [eventCounter, setEventCounter] = useState({})
  const value = { events, addEvent, eventCounter }

  function addEventToCount({event}) {
    const newCounterState = {
      ...eventCounter,
      ...(event in eventCounter ? {[event]: eventCounter[event] + 1} : {[event]: 1})
    }

    setEventCounter(newCounterState)
  }

  function addEvent(event) {
    const newEvent = [...events, event]
    newEvent.sort( (a, b) => {
      const aDate = Date.parse(a.timestamp)
      const bDate = Date.parse(b.timestamp)
      return aDate < bDate
    })
    addEventToCount(event)
    setEvents(newEvent)
  }

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>
}

function useEventContext() {
  const context = useContext(EventContext)
  if(!context) {
    throw new Error('useContext must be within a EventProvider')
  }
  return context
}

export {
  EventProvider,
  useEventContext,
}