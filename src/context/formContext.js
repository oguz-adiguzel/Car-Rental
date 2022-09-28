import { createContext, useState, useContext } from "react";

const FormContext = createContext();
export const FormProvider = ({ children }) => {
    const [form, setForm] = useState([]);
    const values = {
        form,
        setForm
    }
    return <FormContext.Provider value={values}>
        {children}
    </FormContext.Provider>
}
export const useForm = () => {
    return useContext(FormContext);
}