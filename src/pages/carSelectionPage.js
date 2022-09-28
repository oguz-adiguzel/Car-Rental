import Car from '../components/car';
import { useForm } from '../context/formContext';
import logo from '../img/logo.gif';
import chip from '../img/chip.svg';
import mastecard from '../img/mastercard.svg';
import visa from '../img/visa.svg';
import Moment from 'moment';
import { useCarId } from '../context/carSelectedID';
import { useEffect, useState } from 'react';
import { FormattedNumber } from "react-intl";
import { useNavigate } from 'react-router-dom';


function CarSelection() {
    const carList = [
        {
            id: 1,
            model: "Fiat Egea",
            fuel: 'Dizel',
            gear: 'Manuel',
            clas: 'ekonomik',
            coefficient: 1.123,
            imgUrl: 'https://www.hillrentacar.com/dosya/2325/sinif/25-18-23-fiat-egea-ve-benzeri.png'
        },
        {
            id: 2,
            model: "Renault Clio",
            fuel: 'Benzin',
            gear: 'Otomatik',
            clas: 'ekonomik',
            coefficient: 1.320,
            imgUrl: 'https://www.hmkrentacar.com.tr/Uploads/GenelResim/b_renault-clio-48395.png'
        },
        {
            id: 3,
            model: "Fiat Egea HB",
            fuel: 'Dizel',
            gear: 'Otomatik',
            clas: 'ekonomik',
            coefficient: 1.335,
            imgUrl: 'https://www.aracbul.com/storage/39353/conversions/fiat-egea-hatchback-2020-big.webp'
        },
        {
            id: 4,
            model: "Renault Tailant",
            fuel: 'Dizel',
            gear: 'Manuel',
            clas: 'ekonomik',
            coefficient: 1.443,
            imgUrl: 'https://www.sifiraracal.com/resim/model/859/1508/renault-taliant.png'
        },
        {
            id: 5,
            model: "Renault Megane",
            fuel: 'Dizel',
            gear: 'Otomatik',
            clas: 'konfor',
            coefficient: 2.424,
            imgUrl: 'https://www.dailygo.com.tr/dosya/1545/sinif/4-48-26-renault-megane-touch-edc-ve-benzeri.png'
        },
        {
            id: 6,
            model: "Ford Focus",
            fuel: 'Dizel',
            gear: 'Otomatik',
            clas: 'konfor',
            coefficient: 2.525,
            imgUrl: 'https://www.ugmarackiralama.com.tr/assets/media/focus_carImage_resize_800__80.png'
        },
        {
            id: 7,
            model: "Toyota Corolla",
            fuel: 'Hybrid',
            gear: 'Otomatik',
            clas: 'konfor',
            coefficient: 2.734,
            imgUrl: 'https://www.carwingo.com.tr/dosya/112/sinif/106-22-34-toyota-corolla-benzin-otomatik.png'
        },
        {
            id: 8,
            model: "Honda Civic",
            fuel: 'Benzin',
            gear: 'Otomatik',
            clas: 'konfor',
            coefficient: 2.742,
            imgUrl: 'https://www.sifiraracal.com/resim/renk/713/honda-civic-sedan-ay-gumusu-metalik.png'
        },
        {
            id: 9,
            model: "Peugeot 3008",
            fuel: 'Dizel',
            gear: 'Otomatik',
            clas: 'prestij',
            coefficient: 3.335,
            imgUrl: 'https://www.sifiraracal.com/resim/renk/803/peugeot_3008_metalik_gumus_copy.png'
        },
        {
            id: 10,
            model: "Volkswagen Troc",
            fuel: 'Dizel',
            gear: 'Manuel',
            clas: 'prestij',
            coefficient: 3.535,
            imgUrl: 'https://www.sifiraracal.com/resim/renk/923/volkswagen-t-roc-ascot-gri.png'
        },
        {
            id: 11,
            model: "Skoda Superb",
            fuel: 'Dizel',
            gear: 'Manuel',
            clas: 'prestij',
            coefficient: 3.653,
            imgUrl: 'https://www.nicepng.com/png/full/991-9915667_skoda-superb-2019-l-k.png'
        },
        {
            id: 12,
            model: "Volkswagen Passat",
            fuel: 'Dizel',
            gear: 'Manuel',
            clas: 'prestij',
            coefficient: 3.788,
            imgUrl: 'https://www.2ecarrental.com.tr/upload/passat/unnamed.png'
        },
        {
            id: 13,
            model: "Mercedes C Serisi",
            fuel: 'Benzin',
            gear: 'Otomatik',
            clas: 'premium',
            coefficient: 5.233,
            imgUrl: 'https://mukayese.com/img/cars/mercedes-benz/c-serisi-coupe/mercedes-benz-c-serisi-coupe-default.png'
        },
        {
            id: 14,
            model: "Bmw 3 Serisi",
            fuel: 'Benzin',
            gear: 'Otomatik',
            clas: 'premium',
            coefficient: 5.598,
            imgUrl: 'https://www.sifiraracal.com/resim/renk/968/bmw-3-serisi-sedan-gri-metalik.png'
        },
        {
            id: 15,
            model: "Mercedes E Serisi",
            fuel: 'Benzin',
            gear: 'Otomatik',
            clas: 'premium',
            coefficient: 6.554,
            imgUrl: 'https://www.emirturvip.com/images/product/1745673067767-314-2021_e-class_colors_black-1.png'
        }
    ]

    const [formValue, setFromValue] = useState({
        name: "",
        surname: "",
        tc: "",
        email: "",
        birthDay: "",
        phone: "",
        adress: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromValue((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const { name, surname, tc, email, birthDay, phone, adress } = formValue;

    useEffect(() => {
        dayCalculation()
    }, []);

    const navigate = useNavigate()

    const dailyPrice = 475;
    const [day, setDay] = useState()
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

    const { form } = useForm();
    const { carId, setCarId } = useCarId();

    if (form.openLocation === '1') {
        form.openLocation = 'İstanbul Yeni Havalimanı'
    } else if (form.openLocation === '2') {
        form.openLocation = 'İstanbul Atatürk Havalimanı'
    } else if (form.openLocation === '3') {
        form.openLocation = 'İstanbul Sabiha Gökçen Havalimanı'
    }

    if (form.closeLocation === '1') {
        form.closeLocation = 'İstanbul Yeni Havalimanı'
    } else if (form.closeLocation === '2') {
        form.closeLocation = 'İstanbul Atatürk Havalimanı'
    } else if (form.closeLocation === '3') {
        form.closeLocation = 'İstanbul Sabiha Gökçen Havalimanı'
    }


    let selectedCar = carList.filter((item, index) => (
        carId === item.id
    ))

    const close = () => {
        setCarId();
    }

    const completeReservation = () => {
        console.log(formValue);
        setCarId();
        alert('Rezervasyon Tamamlandı')
        navigate('/');
    }

    return (<>
        {
            carId && <div className='car-selection-popup d-flex justify-content-center py-3 slide-in-fwd-center'>
                <div className='w-50 bg-light car-section-popup-box '>
                    <div className='container-fluid bg-warning d-flex justify-content-between align-items-center'>
                        <h5 className='text-light fw-bold fs-3 p-3'>REZERVASYONU TAMAMLA</h5>
                        <button onClick={close} type="button" className="btn btn-danger btn-sm">X</button>
                    </div>

                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-warning fs-5 text-center mt-3'>Lokasyon ve Tarih</p>
                            <div>
                                <span className='text-danger ms-3 '>Alış Ofisiniz : </span><span className='fw-bold'>{form.openLocation}</span>
                            </div>
                            <div className='mt-2'>
                                <span className='text-danger ms-3 '>İade Ofisiniz : </span><span className='fw-bold'>{form.closeLocation}</span>
                            </div>
                            <div className='mt-4'>
                                <span className='text-danger ms-3'>Alış Tarihiniz : </span><span className='fw-bold'>{Moment(form.openDate).format('DD.MM.YYYY')}</span>
                            </div>
                            <div className='mt-2'>
                                <span className='text-danger ms-3'>İade Tarihiniz : </span><span className='fw-bold '>{Moment(form.closeDate).format('DD.MM.YYYY')}</span>
                            </div>
                        </div>
                        <div className='col-6 popup-img-container'>
                            {
                                selectedCar.map((item, index) => (
                                    <div key={index} className='container-fluid d-flex flex-column align-items-center'>
                                        <p className='text-warning fs-5 text-center mt-3'>{item.model}</p>
                                        <img className='w-100' src={item.imgUrl} />
                                        <div>
                                            <span className='fw-bold'>{item.fuel},</span><span>{item.gear},</span><span className='text-capitalize fw-bold'>{item.clas}</span>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>

                        <div className="row ps-4 mt-3">
                            <h5 className='text-warning fs-4 mb-3'>Kişisel Bilgileriniz</h5>

                            <div className="col">
                                <input type="text" className="form-control"
                                    name='name' onChange={handleChange} value={name} placeholder="İsim" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name='surname' onChange={handleChange} value={surname} placeholder="Soyisim" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row ps-4 mt-2">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="TC Kimlik Numarası" name='tc' onChange={handleChange} value={tc} aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name='email' onChange={handleChange} value={email} placeholder="E-mail" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row ps-4 mt-2">
                            <div className="col">
                                <input type="text" className="form-control" name='birthDay' onChange={handleChange} value={birthDay} placeholder="Doğum Tarihi" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name='phone' onChange={handleChange} value={phone} placeholder="Telefon Numarası" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row ps-4 mt-2">
                            <div className="col-12">
                                <input type="text" className="form-control" name='adress' onChange={handleChange} value={adress} placeholder="Adres" aria-label="First name" />
                            </div>
                        </div>

                    </div>

                    <h5 className='text-warning fs-4 mt-5 ms-3'>Ödeme Bilgileriniz</h5>
                    <div className='container-fluid d-flex mt-3'>

                        <div className='credit-card w-50 py-1'>
                            <div className='container-fluid d-flex justify-content-end'>
                                <img className='credit-card-img me-2' src={visa} />
                                <img className='credit-card-img' src={mastecard} />
                            </div>
                            <div className='container-fluid'>
                                <img className='credit-card-img' src={chip} />
                            </div>
                            <div className='container-fluid mt-2'>
                                <input className='w-100 credit-card-input' type='text' placeholder='Kart Numarası' />
                            </div>
                            <div className='container-fluid mt-3 d-flex justify-content-between'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <input className='credit-card-input' type='text' placeholder='Kart Üzerindeki İsim' />
                                    </div>
                                    <div className='col-6 d-flex'>
                                        <div className='mt-1'>
                                            <span className='thur'>V. THUR</span>
                                            <select name="mounth" id="mounth" className='credit-card-select'>
                                                <option value="1">01</option>
                                                <option value="2">02</option>
                                                <option value="3">03</option>
                                                <option value="4">05</option>
                                                <option value="4">06</option>
                                                <option value="4">07</option>
                                                <option value="4">08</option>
                                                <option value="4">09</option>
                                                <option value="4">10</option>
                                                <option value="4">11</option>
                                                <option value="4">12</option>
                                            </select>
                                            <select name="years" id="years" className='credit-card-select'>
                                                <option value="1">22</option>
                                                <option value="2">23</option>
                                                <option value="3">24</option>
                                                <option value="4">25</option>
                                                <option value="4">26</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className='price-info'>
                            {
                                selectedCar.map((item, index) => (
                                    <div key={index} className='container'>
                                        <span className='fw-bold fs-5'>{item.model} </span> <span>{item.gear},</span><span>{item.fuel},</span><span className='text-capitalize'>{item.clas}</span>
                                        <h5 className='fw-bold text-danger mt-3 fs-3 text-success'>Toplam Fiyat</h5>
                                        <p className='fw-bold fs-4'><FormattedNumber value={(dailyPrice * day * item.coefficient)} style={'currency'} currency="TRY" /></p>

                                    </div>

                                ))
                            }

                            <button onClick={completeReservation} type='submit' className="complate-payment-button ms-2 mt-2">Ödemeyi Tamamla</button>

                        </div>
                    </div>

                </div>
            </div>
        }
        <div className="container py-4 d-flex justify-content-between">
            <img className='logo' src={logo} />
            <div className='d-flex justify-content-evenly w-50 align-items-center header-info-container'>
                <div>
                    <div>
                        <span className='text-success header-info'>Alış Ofisiniz : </span><span className='fw-bold header-info'>{form.openLocation}</span>
                    </div>
                    <div>
                        <span className='text-success header-info'>Alış Tarihiniz : </span><span className='fw-bold header-info'>{Moment(form.openDate).format('DD.MM.YYYY')}</span>
                    </div>

                </div>

                <div>
                    <div>
                        <span className='text-danger header-info'>İade Ofisiniz : </span><span className='fw-bold header-info'>{form.closeLocation}</span>
                    </div>
                    <div>
                        <span className='text-danger header-info'>İade Tarihiniz : </span><span className='fw-bold header-info'>{Moment(form.closeDate).format('DD.MM.YYYY')}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid car-list py-5'>
            <div className='row'>
                {
                    carList.map((item, index) => (
                        <div key={index} className='col-4 mt-4 my-animation'>
                            <Car cars={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    </>);
}

export default CarSelection;