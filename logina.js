document.getElementById('login-sub').addEventListener('click',function(){
// for email
  const emailfielld =  document.getElementById('user-email');
  const useremail= emailfielld.value;
//   for pass
  const passfield = document.getElementById('user-pass');
  const userpass= passfield.value;

  if(useremail == 'me@gmail.com' && userpass == 'tklagbo'){
    window.open('banking.html');
     
  }
})