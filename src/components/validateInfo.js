export default function validateInfo(values){
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