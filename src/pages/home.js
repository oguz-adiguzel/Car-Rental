import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Header from "../components/header";
import bmw from '../img/bmw.png';
import mercedes from '../img/mercedes.png';
import audi from '../img/audi.png';
import twitter from '../img/twitter.svg';
import google from '../img/google.svg';
import facebook from '../img/facebook.svg';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from "../context/formContext";
import validation from "../validations";
import Moment from 'moment';

function Home() {

    const navigate = useNavigate();

    const { form, setForm } = useForm()

    useEffect(() => {
        setForm([]);
    }, []);


    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            openLocation: '',
            closeLocation: '',
            openDate: '',
            closeDate: '',
        },
        onSubmit: (values) => {
            setForm(values)
            // console.log(values);

            setTimeout(() => {
                navigate('/carSelection')
            }, 1500);

        },
        validationSchema: validation
    })

    let openMinDate = new Date();
    let newOpenMinDate = Moment(openMinDate).format('YYYY-MM-DD');

    let closeMinDate = new Date(values.openDate);
    let newCloseMinDate = Moment(closeMinDate).format('YYYY-MM-DD');
   
    return (<>
        {form.openLocation && <div className="container-fluid popup-container">
            <div className="popup">
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <p className="fw-bold mt-3 fs-5">İşleminiz Yapılıyor</p>
            </div>
        </div>}
        <Header />

        <div className='container-fluid main py-4'>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-4 form-container d-flex justify-content-center align-items-center py-5 my-5">
                        <form onSubmit={handleSubmit} className="w-100">
                            <select className="form-select py-3" aria-label="Default select example" value={values.openLocation} onChange={handleChange} name="openLocation" onBlur={handleBlur}>
                                <option value="0">Alış Ofisini Seçiniz</option>
                                <option value="1">İstanbul Yeni Havalimanı</option>
                                <option value="2">İstanbul Atatürk Havalimanı</option>
                                <option value="3">İstanbul Sabiha Gökçen Havalimanı</option>
                            </select>
                            {
                                touched.openLocation && errors.openLocation && <p className="text-danger text-center mt-2">{errors.openLocation}</p>
                            }
                            <select className="form-select py-3 mt-3" aria-label="Default select example" value={values.closeLocation} onChange={handleChange} name="closeLocation">
                                <option value="0">İade Ofisini Seçiniz</option>
                                <option value="1">İstanbul Yeni Havalimanı</option>
                                <option value="2">İstanbul Atatürk Havalimanı</option>
                                <option value="3">İstanbul Sabiha Gökçen Havalimanı</option>
                            </select>
                            {
                                touched.closeLocation && errors.closeLocation && <p className="text-danger text-center mt-2">{errors.closeLocation}</p>
                            }
                            <div className="container-fluid d-flex justify-content-around align-items-center mt-3">
                                <span className="fs-5">Alış Tarihiniz</span><input className="date" name="openDate" min={newOpenMinDate} type='date' value={values.openDate} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            {
                                touched.openDate && errors.openDate && <p className="text-danger text-center mt-2">{errors.openDate}</p>
                            }
                            <div className="container-fluid d-flex justify-content-around align-items-center mt-3">
                                <span className="fs-5 ">İade Tarihiniz</span><input className="date" name="closeDate" type='date' min={newCloseMinDate} value={values.closeDate} onChange={handleChange} />
                            </div>
                            {
                                touched.closeDate && errors.closeDate && <p className="text-danger text-center mt-2">{errors.closeDate}</p>
                            }
                            <div className="w-100 d-flex justify-content-center">
                                <button type="submit" className="w-50 mt-4 submit-button">Araç Kirala</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-7 my-5 d-flex justify-content-end">
                        <Carousel>
                            <Carousel.Item>
                                <div className="container d-flex flex-column align-items-center py-2">
                                    <span className="fs-3 mt-2 text-light align-self-start fw-bold">PREMIUM ARAÇ KİRALAMADA AVANTAJLI FIRSATLAR</span>
                                    <span className="fs-6 text-secondary align-self-start fw-bold">KALİTE İÇİN PREMIUM'U TERCİH EDİN</span>
                                    <img
                                        className="d-block w-75 carousel-img"
                                        src={bmw}
                                        alt="First slide"
                                    />
                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="container d-flex flex-column align-items-center py-2">
                                    <span className="fs-3 mt-2 text-light align-self-start fw-bold">İLK KİRALAMADA %10 İNDİRİM</span>
                                    <span className="fs-6 text-secondary align-self-start fw-bold">KALİTE İÇİN PREMIUM'U TERCİH EDİN</span>
                                    <img
                                        className="d-block w-75 carousel-img"
                                        src={mercedes}
                                        alt="First slide"
                                    />
                                </div>

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="container d-flex flex-column align-items-center py-2">
                                    <span className="fs-3 mt-2 text-light align-self-start fw-bold">ONLİNE ÖDEMEDE %15 İNDİRİM</span>
                                    <span className="fs-6 text-secondary align-self-start fw-bold">KALİTE İÇİN PREMIUM'U TERCİH EDİN</span>
                                    <img
                                        className="d-block w-75 carousel-img"
                                        src={audi}
                                        alt="First slide"
                                    />
                                </div>

                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

        <div className="container services mt-5 pb-5">
            <h4 className="text-center fs-1 text-secondary fw-bold">Müşteri Hizmetleri</h4>
            <span className="underline mt-3"></span>
            <div className="row d-flex justify-content-evenly mt-5">
                <div className="col-5 services-card px-5 py-5">
                    <h5 className="fs-3 text-secondary">Araç Rezervasyonunda Özel Fiyatlar</h5>
                    <p className="card-info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                </div>
                <div className="col-5 services-card px-5 py-5">
                    <h5 className="fs-3 text-secondary">Cep Telefonu Rezervasyonu</h5>
                    <p className="card-info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                </div>
            </div>
            <div className="row d-flex justify-content-evenly mt-5">
                <div className="col-5 services-card px-5 py-5">
                    <h5 className="fs-3 text-secondary">Sınırsız Km Araç Kiralama</h5>
                    <p className="card-info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                </div>
                <div className="col-5 px-5 py-5 services-card">
                    <h5 className="fs-3 text-secondary">Tek Yön Araç Kiralama</h5>
                    <p className="card-info">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                </div>
            </div>
        </div>


        <div className="container-fluid bg-warning py-4 mt-5 deneme">
            <div className="container py-5">
                <div className="row">
                    <div className="col-5 d-flex flex-column justify-content-center">
                        <span className="fs-4 fw-bold text-light ms-4">MUHTEŞEM TEKLİFLER İÇİN KAYDOLUN</span>
                        <span className="fs-6 text-secondary ms-4">TEKLİFLER VE PROMOSYONLAR İÇİN ÖZEL ERİŞİM</span>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <div className="input-group">
                            <input type="text" className="form-control py-2" placeholder="Email adresinizi giriniz" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Gönder</button>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center">
                        <img className="icon" src={twitter} />
                        <img className="icon" src={google} />
                        <img className="icon" src={facebook} />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Home;