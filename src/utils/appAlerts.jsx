import swal from 'sweetalert';

const SwalSuccess = (msg) => {
    swal(
        "Success!",
        msg,
        "success"
    );
};

const SwalError = (error) => {
    let msg = "";
    if (typeof(error) === 'object'){
        let msgList = []
        msgList = Object.keys(error)?.map((i)=>`${i?.toUpperCase()} : ${error?.[i]?.[0]}`);
        msg = msgList?.join('\n');
    }
    swal(
        "Error!",
        msg,
        "error"
    );
};


export {
    SwalSuccess,
    SwalError
}