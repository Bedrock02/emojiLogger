import EventForm from '../forms/eventForm'
import EventHistory from '../components/eventHistory'
import { useEventContext } from '../contexts/eventContext'

const columnStyles = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const Logger = () => {
  const { addEvent } = useEventContext()
  
  function handleSubmit({ data }) {
    const { timestamp, event } = data
    if( !event ) { return }
    
    let newTime
    if( !timestamp ) {
      newTime = new Date().toUTCString()
    }
  
    const newEvent = {
      event,
      timestamp: newTime ? newTime : timestamp
    }

    addEvent(newEvent)

  }
  return (
    <header className="App-header">
    <div className="container" style={columnStyles}>
        <EventForm handleSubmit={handleSubmit}/>
    </div>
    <div id="eventHistory" style={columnStyles}>
      <EventHistory />
    </div>
</header>
)}

export default Logger;