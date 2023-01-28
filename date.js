

//if we want export specific function can use as below
exports.getDate=function(){
    const today =new Date();

    const options = {
        weekday:"long",
        month:"long",
        day:"numeric",
        year:"numeric"
    };
    
    return today.toLocaleDateString("en-US", options);


}

exports.getDay=function(){
    const today= new Date();

    const options={
        weekday:"long"
    };
    return today.toLocaleDateString("en-US", options);

    
}
