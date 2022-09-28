import { createContext, useContext, useState } from "react";

const CarIdContext = createContext();
export const CarIdProvider = ({ children }) => {
    const [carId, setCarId] = useState()
    const values = {
        carId,
        setCarId
    }
    return <CarIdContext.Provider value={values}>
        {children}
    </CarIdContext.Provider>
}
export const useCarId = () =>{
    return useContext(CarIdContext)
}