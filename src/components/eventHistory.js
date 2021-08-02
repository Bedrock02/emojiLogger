import { getEmojiByName } from '../lib/helpers'
import { useEventContext } from '../contexts/eventContext'

const styles = {
  height: '50%',
  overflowY: 'scroll'
}

const timestampStyles = {
  fontSize: '.7em'
}

const EventHistory = () => {
  const { events } = useEventContext()
  return (
    <div id="eventContainer" style={styles}>
      {events.map(({ event, timestamp }) => (
          <div>
              <span>{getEmojiByName(event)} - </span>
              <span style={timestampStyles}>{timestamp}</span>
          </div>
        )
      )}
    </div>
  )
}

export default EventHistory