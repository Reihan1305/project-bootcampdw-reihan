function submitData(event){
event.preventDefault()
  const name=document.getElementById("name").value
  const email=document.getElementById("email").value
  const phoneNumber=document.getElementById("phoneNumber").value
  const subject=document.getElementById("subject").value
  const message=document.getElementById("message").value
if(name ==""){
  return alert("nama harus diisi")
}
else if (email ==""){
  return alert("email harus diisi!")
}
else if(phoneNumber ==""){
  return alert("phoneNumber harus diisi!")
}
else if(subject ==""){
  return alert("subject harus diisi!")
}
else if(message ==""){
  return alert("message harus diisi!")
}
  console.log(name)
  console.log(email)
  console.log(phoneNumber)
  console.log(subject)
  console.log(message)
  
  let a =document.createElement(`a`)
  a.href=`mailto:${email}
  ?subject=${subject}
  &body=${
    encodeURIComponent('hello my name is')
  }
  ${name},
  ${subject}, 
  ${encodeURIComponent(message)}`
 a.click()
}