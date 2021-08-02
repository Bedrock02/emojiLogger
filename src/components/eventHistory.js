import { getEmojiByName } from '../lib/helpers'
import { useEventContext } from '../contexts/eventContext'

const styles = {
  height: '50%',
  overflowY: 'scroll'
}

const EventHistory = () => {
  const { events } = useEventContext()

  return (
    <div id="eventContainer" style={styles}>
      {events.map(({ event, timestamp }) => (
          <div>
              <span>@{timestamp}</span>
              <span>{getEmojiByName(event)}</span>
          </div>
        )
      )}
    </div>
  )
}

export default EventHistory