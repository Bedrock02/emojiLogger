import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'


const EventContext = createContext()

function EventProvider({ children }) {
  const [events, setEvents] = useState([])
  const value = { events, addEvent }

  useEffect(() => {
    console.log(events)    
  }, [events])

  function addEvent(event) {
    const newEvent = [...events, event]
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