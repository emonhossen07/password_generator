
document.getElementById('generatePassword').addEventListener('click', function () {
    // get length data
    const getLength = document.getElementById('lengthData').value;
    const finalLength = parseInt(getLength)
    // get select type data
    const getSelectData = document.getElementById('selectData').value;
    // alert show
    const errorShow = document.getElementById('error');

    console.log(getSelectData);

    if (getLength === '' || finalLength <= 6 || finalLength >= 30 || getSelectData === '0') {
        errorShow.innerText = 'Length should be smaller than 30 and greater than 6 and filed not empty';
        errorShow.style.color = 'red'
        return;
    }

    // result show here
    const outPutShow = document.getElementById('showResult');
    if (finalLength && finalLength > 6 && getSelectData !== '0' && finalLength <= 30) {
        outPutShow.style.display = 'block'
        errorShow.innerText = ''
    } else {
        outPutShow.style.display = 'none'
    }

    // Generate Passord start here

    if (getSelectData === 'Simple') {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let newPassword = "";
        for (let i = 0; i < finalLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length);
            newPassword = newPassword + chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("result").value = newPassword;


    } else if (getSelectData === 'Medium') {

        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let newPassword = "";
        for (let i = 0; i < finalLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length);
            newPassword = newPassword + chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("result").value = newPassword;

    } else {

        const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let newPassword = "";
        for (let i = 0; i < finalLength; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length);
            newPassword = newPassword + chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("result").value = newPassword;

    }

})


// for copy text
const btn = document.getElementById('copyPassword');
btn.addEventListener("click", function () {
    const txt = document.getElementById('result');
    txt.select();
    document.execCommand('copy');
})

