import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

import propTypes from 'prop-types';
import { ErrorMessage } from "formik";

InputField.propTypes = {
    field: propTypes.object.isRequired,
    form: propTypes.object.isRequired,

    type: propTypes.string,
    lable: propTypes.string,
    placeholder: propTypes.string,
    disabled: propTypes.bool
}

InputField.defaultProps = {
    type: 'text',
    lable: '',
    placeholder: '',
    disabled: false
}

function InputField(props) {
    const { field, form, type, lable, placeholder, disabled } = props;

    const { name } = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];
    
    // console.log(props );

    return (
        <FormGroup>
            {lable && <Label  for={name} className="mb-1 block">{lable}</Label>}
 
            <Input 
                id={name}
                {... field}

                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className="block w-full py-2 px-3 rounded focus:outline-0"
                invalid={showError}
            />

            <ErrorMessage name={name} component={FormFeedback} className="text-red-600" />
        </FormGroup>
    )
}

export default InputField;