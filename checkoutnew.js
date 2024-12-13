function sendMail() {
    var params = { // Use "=" to assign the object
        fullName: document.getElementById("fullName").value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        location: document.getElementById('location').value
    };

    const service_id = "service_ltehfpg";
    const template_id = "template_avgcqg8";

emailjs.send(service_id,template_id,params)
.then((res) => {
    document.getElementById('fullName').value= "";
    document.getElementById('address').value="";
    document.getElementById('city').value="";
    document.getElementById('pincode').value="";
    document.getElementById('phoneNumber').value="";
    document.getElementById('location').value="";
    console.log(res);
    alert("your message sent successfully");
})
.catch((err) => console.log(err));
}

