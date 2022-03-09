function submit({token, chatId, data}){
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${data}`)
}

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.querySelector("[name=name]").value;
    const phone = document.querySelector("[name=phone]").value;
    const msg = document.querySelector("[name=msg]").value;

    if(name !=='' && phone !== '' && msg !== '')
        submit({
            token: "5104059461:AAE9gSrdGMopN1QyrMYHOm6irD3ZYOnQp7k",
            chatId: "1637157234",
            data: `Ismi: ${name} %0ATelefon raqami: ${phone}%0A Xabar: ${msg}`
        })
})