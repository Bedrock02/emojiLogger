import { useEventContext } from '../contexts/eventContext'
import { getEmojiByName } from '../lib/helpers'

const countStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  fontSize: '2em',

}

const EventAnalytics = () => {
  const { eventCounter } = useEventContext()
  return (
    <div>
      <h2>Event Analytics</h2>
      <div>
        { Object.keys(eventCounter).map( name => (
          <div style={countStyle}>
            <div>{getEmojiByName(name)}</div>
            <div>{eventCounter[name]}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default EventAnalytics