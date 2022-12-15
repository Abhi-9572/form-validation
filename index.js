function validate() {
    let firstnameinput = document.getElementById('first-name').value
    let lastnameinput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let StateInput = document.getElementById('state').value
    let zipinput = document.getElementById('zip').value
    let cityinput = document.getElementById('city').value
    let tnCInput = document.getElementById('tnC').checked

    if (firstnameinput.length >= 1) {
        document.getElementById('valid-first-name').style.display = 'block'
        document.getElementById('invalid-first-name').style.display = 'none'
    }
    else {
        document.getElementById('invalid-first-name').style.display = 'block'
        document.getElementById('valid-first-name').style.display = 'none'
    }


    if (emailInput &&
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@')!==0
        ) {

        document.getElementById('valid-email').style.display = 'block'
        document.getElementById('invalid-email').style.display = 'none'
    }
    else {

        document.getElementById('valid-email').style.display = 'none'
        document.getElementById('invalid-email').style.display = 'block'
    }

    if(zipinput && zipinput.length==6 && parseInt(zipinput))
    {
        document.getElementById('valid-zip').style.display = 'block'
        document.getElementById('invalid-zip').style.display = 'none' 
    }
    else{
        document.getElementById('valid-zip').style.display = 'none'
        document.getElementById('invalid-zip').style.display = 'block' 
    }
    
    if(tnCInput)
    {
        document.getElementById('valid-tnc').style.display='none'
    }
    else
    {
        document.getElementById('valid-tnc').style.display='block'
    }
   if(StateInput!=="")
   {
    document.getElementById('valid-state').style.display = 'block'
    document.getElementById('invalid-state').style.display = 'none'
   }
   else{
    document.getElementById('valid-state').style.display = 'none'
    document.getElementById('invalid-state').style.display = 'block'
   }
    
}