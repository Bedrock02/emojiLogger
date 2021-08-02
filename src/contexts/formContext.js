import { 
  createContext,
  useState,
  useContext
} from 'react'

const FormContext = createContext()

const initialFormState = {
  event: null,
  timestamp: null,
}

function FormProvider({ children }) {
  const [formData, setFormData] = useState(initialFormState)
  const value = { formData, updateForm }

  function updateForm(newData) {
    const newFormData = {...formData, ...newData}
    setFormData(newFormData)
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

function useFormContext() {
  const context = useContext(FormContext)
  if( context === undefined ) {
    throw new Error('useContext must be within a CountProvider')
  }
  return context
}

export {
  useFormContext,
  FormProvider
}