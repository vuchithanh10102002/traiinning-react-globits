import { Formik, Form, FastField } from "formik";
// import { useEffect, useState } from "react";
import InputField from "./InputField";
import * as Yup from 'yup';

function FormCountry({handleCloseForm, type, submit, edit}) {
    // const [ name, setName ] = useState('');
    // const [ code, setCode ] = useState('');
    // const [ description, setDescription ] = useState('');
    let initialValues = edit ? {
        name: edit.name,
        code: edit.code,
        description: edit.description
    } : {
        name: '',
        code: '',
        description: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Hãy nhập tên country'),
        code: Yup.string().required('Hãy nhập code'),
        description: Yup.string().required('Hãy nhập description')
    })

    return (
        <div className="flex justify-center">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {formikProps => {
                    const {values, errors, touched} = formikProps;
                    
                    console.log({values, errors, touched});
                    const newCountry = {
                        name: values.name,
                        code: values.code,
                        description: values.description
                    }
                
                    const handleSubmit = () => {
                        submit(newCountry);
                        values.name = '';
                        values.description = '';
                        values.code = '';
                    }



                    return (
                        <Form className="h-auto w-6/12 bg-slate-300 absolute top-1/4 left-1/4 text-center p-4 rounded">
                            <h1 className="text-2xl">{type} Country</h1>
                            <i onClick={handleCloseForm} className="fa-solid fa-x absolute top-2 right-3"></i>
                            <div className="text-name text-left mb-2">
                                <FastField 
                                    name="name"
                                    component={InputField}

                                    lable="Name:"
                                    placeholder="Eg: Viet Nam"
                                />
                                {/* <h3 className="mb-1">Name:</h3>
                                <input name="name" type="text" className="block w-full py-2 px-3 rounded focus:outline-0"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                /> */}
                            </div>

                            <div className="text-code text-left mb-2">
                                <FastField 
                                    name="code"
                                    component={InputField}

                                    lable="Code:"
                                    placeholder="Eg: VN"
                                />
                                {/* <h3 className="mb-1">Code:</h3>
                                <input name="code" type="text" className="block w-full py-2 px-3 rounded focus:outline-0"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                /> */}
                            </div>

                            <div className="text-discription text-left mb-2">
                                <FastField 
                                    name="description"
                                    component={InputField}

                                    lable="Description:"
                                    placeholder="Eg: Quoc gia Viet Nam"
                                />
                                {/* <h3 className="mb-1">Description:</h3>
                                <input name="description" type="text" className="block w-full py-2 px-3 rounded focus:outline-0"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                /> */}
                            </div>
                            <button type="submit" onClick={handleSubmit} className="block w-full p-2 mt-5 bg-red-500 rounded-md">Submit</button>
                        </Form>   
                    )
                }}
            </Formik>
            

        </div>
    )
}

export default FormCountry;