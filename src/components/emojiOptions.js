import { useFormContext } from '../contexts/formContext'
import { EMOJI_NAMES, getEmojiByName } from '../lib/helpers'


const fieldName = 'event'

const EmojiOptions = () => {
  const { updateForm } = useFormContext()

  function handleSelectdOption(event) {
    const selectElement = event.target
    const selectedOption = selectElement.options[selectElement.selectedIndex]
    const selectedOptionValue = selectedOption.value
    updateForm({[fieldName]: selectedOptionValue})
  }  
  
  return (
    <div>
      <label htmlFor={fieldName}>Select An Event:</label>
      <select name={fieldName} onChange={handleSelectdOption}>
        <option value="">Please choose an event</option>
        {EMOJI_NAMES.map( name => {
          let code = getEmojiByName(name)
          return (
          <option
            key={`option-${name}`}
            value={name}>{`${code} - ${name}`}
          </option>
        )})}
      </select>
    </div>
)}

export default EmojiOptions