import EventForm from '../forms/eventForm'
import EventHistory from '../components/eventHistory'
import EventAnalytics from '../components/eventAnalytics'
import { useEventContext } from '../contexts/eventContext'

const columnStyles = {
  height: '75vh',
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
      newTime = new Date().toLocaleString()
    }
  
    const newEvent = {
      event,
      timestamp: newTime ? newTime : timestamp
    }

    addEvent(newEvent)

  }
  return (
    <>
      <div className="App-header">
        <div style={columnStyles}>
            <EventForm handleSubmit={handleSubmit}/>
        </div>
        <div id="eventHistory" style={columnStyles}>
          <EventHistory />
        </div>
      </div>
      <EventAnalytics />
    </>
)}

export default Logger;