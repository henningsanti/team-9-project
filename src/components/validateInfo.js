/*export default function validateInfo(values){
    let errors = {};


    if (!values.gallons.trim()){
        errors.gallons = 'Gallons required';
    }
    else if(!/[0-9]/.test(values.gallons)){
        errors.gallons = 'Gallons number is invalid';
    }

    if (!values.date){
        errors.date = 'Delivery date required';
    }

    return errors;
}
*/

const validateUsername = (entry) => {
    //make sure no illegal characters (only numbers, letters)
}

const validatePassword = (entry) => {
    //not sure what to validate here, think security is solved with password encryption
}

const validateFullName = (entry) => {
    // only letters and spaces
}

const validateAddress = (entry) => {
    // make sure follows address format -- 123 Commons St
}

const validateCity = (entry) => {
    // only letters
}

//etc