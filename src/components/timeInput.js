import { useFormContext } from '../contexts/formContext'

const fieldName = 'timestamp'

const styles = {
  padding: '30px'
}

const TimeInput = () => {

  const { updateForm } = useFormContext()

  function handleTimeChange(event) {
    const today = new Date()
    const timeParts = event.target.value.split(":")
    const hours = Number(timeParts[0])
    const minutes = Number(timeParts[1])
    today.setHours(hours)
    today.setMinutes(minutes)

    updateForm({
      [fieldName]: today.toLocaleString(),
    })
  }
  
  return (
    <div>
      <label htmlFor="eventTime" style={styles}>Time of Event:</label>
      <input
        name="eventTime"
        type="time"
        min="00:00"
        max="23:00"
        onChange={handleTimeChange}
      />
    </div>
  )}

export default TimeInput