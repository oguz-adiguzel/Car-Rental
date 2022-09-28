import * as yup from 'yup'

const validations = yup.object().shape({
    openLocation:yup.string().required('Lütfen alış ofisini seçiniz'),
    closeLocation:yup.string().required('Lütfen iade ofisini seçiniz'),
    openDate:yup.string().required('Lütfen alış tarihinizi seçiniz'),
    closeDate:yup.string().required('Lütfen iade tarihinizi seçiniz')
})
export default validations
