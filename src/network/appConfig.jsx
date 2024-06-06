const ENVIRONMENT_UAT = 'uat';
const ENVIRONMENT_PROD = 'production';

const appSettings = {
    // environment: ENVIRONMENT_UAT,
    environment: ENVIRONMENT_PROD,
}

const UAT_BASE_URL = 'https://nexuscode.in/api';
const PROD_BASE_URL = 'https://nexuscode.in/api';

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