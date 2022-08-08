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
    var reg = new RegExp("^[a-z0-9]*$", "gi");
    return reg.test(entry);
}

const validatePassword = (entry) => {
    var reg = new RegExp("^[a-z0-9_.\!?*-]*$", "gi");
    return reg.test(entry);    
}

const validateFullName = (entry) => {
    // only letters and spaces
    // 50 chars max
    var reg = new RegExp("^[a-z\s-]{1,50}$", "gi");
    return reg.test(entry);
}

const validateStreetAddress = (entry) => {
    // make sure follows address format -- 123 Commons St
    // 100 chars max
    var reg = new RegExp("^([0-9]{1,15}\s[a-z]{1,68}\s[a-z]{1,15})$", "gi");
    return reg.test(entry);
}

const validateCity = (entry) => {
    // only letters
    // 100 chars max
    var reg = new RegExp("^[a-z]{1,100}$", "gi");
    return reg.test(entry);
}

const validateState = (entry) => {
    // 2 letters
    var reg = new RegExp("^[a-z]{2,2}$", "gi");
    return reg.test(entry);
}

const validateZip = (entry) => {
    // 9 max letters, at least 5
    var reg = new RegExp("^[0-9]{5,9}$", "gi");
    return reg.test(entry);
}

const validateGallons = (entry) => {
    // numeric
    var reg = new RegExp("^[0-9]{1,15}$", "gi");
    return reg.test(entry);
}

const validateLongAddress = (entry) => {
    //123 commons st, houston, tx, 77005
    var reg = new RegExp("^([0-9]*\s[a-z]*\s[a-z]*,[a-z\s]*,[\s]*[a-z]{2,2}[\s]*,\s[0-9]{5,9})$", "gi");
    return reg.test(entry);
}

exports.validateCity = validateCity;
exports.validateFullName = validateFullName;
exports.validateGallons =  validateGallons;
exports.validateLongAddress = validateLongAddress;
exports.validatePassword = validatePassword;
exports.validateState = validateState;
exports.validateStreetAddress = validateStreetAddress;
exports.validateUsername = validateUsername;
exports.validateZip = validateZip;
