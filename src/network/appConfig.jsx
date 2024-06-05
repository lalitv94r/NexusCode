const ENVIRONMENT_UAT = 'uat';
const ENVIRONMENT_PROD = 'production';

const appSettings = {
    environment: ENVIRONMENT_UAT,
    // environment: ENVIRONMENT_PROD,
}

const UAT_BASE_URL = 'http://16.16.217.208/api';
const PROD_BASE_URL = '';

const getBaseURL=()=>{
    switch(appSettings?.environment){
        case ENVIRONMENT_UAT:
            return UAT_BASE_URL;
        case ENVIRONMENT_PROD:
            return PROD_BASE_URL;
        default:
            return UAT_BASE_URL;
    }
}

export {
    getBaseURL
}