import  {useFormik,Field,ErrorMessage,FormikProvider} from "formik"
import {string,object} from "yup"

let userSchema =object({
    name:string().min(2).max(5).required(),
    email:string().email().required()
})


function Formik() {
  
    const formik = useFormik({
        initialValues:{
            name:"",
            email:""
        },
        validationSchema:userSchema,
    onSubmit:(values)=>{
        console.log(values)
        
    }
    })

    // const { errors, touched, values, resetForm, setValues } = formik;    
  return (
  <>
  <FormikProvider value={formik}>
  <form onSubmit={formik.handleSubmit}>
    <Field name="name"></Field>
    <ErrorMessage name="name"/>
    <Field name="email"></Field>
    <ErrorMessage  name="email"/>
    <button>add</button>
  </form>
  </FormikProvider>
  </>
  )




}
export default Formik