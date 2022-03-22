import { empty, isEmail } from "./validationRules";
import { capitalize } from "../utils";

const validate = (inputs) => {
    // List of errors
    const errors = {};
    // Loop of all form input fields
    Object.entries(inputs).forEach(([key, value]) => {
        // Check if a given input is empty
        if (empty(value)) {
            errors[key] = `${capitalize(key)} field is required.`;
        // Check if a given input is
        // an array and is not empty
        } else if (Array.isArray(value) && value.length <= 0) {
            errors[key] = `You must select 1 or more ${key}.`;
        // Check if a given input is an
        // email and has the correct format
        } else if (key.toString() === 'email' && !isEmail(value)) {
            errors[key] = `You must select a valid ${key}.`;
        }
    });
    return errors;
}

export default validate;