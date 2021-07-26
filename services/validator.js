const validateMobileNumber = (number) => {
    let response = {
        status: 200,
        message: "Success"
    }
    if (number === undefined) {
        response.status = 400;
        response.message = "Mobile number is a mandatory param";
        return response;
    }
    if (isNaN(number)) {
        response.status = 400;
        response.message = "Mobile number must contain digits only";
        return response;
    }
    if ((number + "").length !== 10) {
        response.status = 400;
        response.message = "Mobile number length should be 10 digits";
        return response;
    }
    return response;
}

module.exports = {
    validateMobileNumber
}
