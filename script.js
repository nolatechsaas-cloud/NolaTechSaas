// Minimal JS: handle contact form submission with basic validation
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name').toString().trim();
    const email = fd.get('email').toString().trim();
    const message = fd.get('message').toString().trim();
    if(!name || !email || !message){
      alert('Please complete all fields.');
      return;
    }
    // This is a placeholder: normally you'd send to a server.
    alert('Thanks, ' + name + '! Your message has been received.');
    form.reset();
  });
});
