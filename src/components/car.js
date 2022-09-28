import { useContext, useEffect, useState } from 'react';
import { useForm } from '../context/formContext';
import { FormattedNumber } from "react-intl";
import { useCarId } from '../context/carSelectedID';

function Car({ cars }) {
    const { id, model, fuel, gear, clas, coefficient, imgUrl } = cars;

    useEffect(() => {
        dayCalculation()
    }, []);

    const { form } = useForm();

    const {carId,setCarId} = useCarId();

    const [day, setDay] = useState()

    const dailyPrice = 475;

    const addCar = (ix) => {
        setCarId(ix)
        console.log(ix);
    }

    const dayCalculation = () => {
        let firstTime = new Date(form.openDate).getTime()
        let lastTime = new Date(form.closeDate).getTime()
        let differanceTime = lastTime - firstTime;
        let differanceDay = Math.ceil(differanceTime / (1000 * 3600 * 24));
        if (differanceDay === 0) {
            differanceDay = 1
        }
        setDay(differanceDay)
    }

    return (<>
        <div className="container-fluid border px-4 py-2 pb-4 bg-light">
            <div className="row">
                <div className="col-6 d-flex flex-column">
                    <span className="car-card-title">{clas}</span>
                    <span className="car-card-model">{model}</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <ul className="car-card-ul">
                        <li className="car-card-li">{fuel}</li>
                        <li className="car-card-li">{gear}</li>
                        <li className="car-card-li">1500 TL Depoito</li>
                        <li className="car-card-li">Sınırsız Km</li>
                        <li className="car-card-li">21 yaş ve üstü</li>
                    </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12 d-flex justify-content-center">
                    <img className="car-card-img" src={imgUrl} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-6 d-flex flex-column justify-content-center">
                    <span className="car-card-price"> <FormattedNumber value={(dailyPrice * day * coefficient)} style={'currency'} currency="TRY" /> </span>
                    <span className="car-card-info">Online Ödeme Kazancınız : 200 TL</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <button onClick={() => addCar(id)} className="car-card-button">Hemen Öde</button>
                </div>
            </div>
        </div>
    </>);
}

export default Car;