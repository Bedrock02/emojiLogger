import EmojiOptions from '../components/emojiOptions'
import TimeInput from '../components/timeInput'
import PropTypes from 'prop-types'
import { useFormContext } from '../contexts/formContext'


const EventForm = ({ handleSubmit }) => {
  const { formData } = useFormContext()
  return (
    <form id="eventForm">
      <EmojiOptions />
      <br/>
      <TimeInput />
      <br/>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleSubmit({data: formData})
        }}>
        Log Event
      </button>
    </form>
)}

EventForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default EventForm