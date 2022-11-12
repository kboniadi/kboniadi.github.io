var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Get the form and message div
const form = document.getElementById('contact-form')
const formMessages = document.querySelector('.ajax-response')

// Add event listener

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  const name = document.getElementById('contact-name').value
  const email = document.getElementById('contact-email').value
  const subject = document.getElementById('contact-subject').value
  const message = document.getElementById('message').value

  const formData = {
    name,
    email,
    subject,
    message
  }

  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(formData)
  }

  fetch('/api/contact', req)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        formMessages.classList.remove('success')
        formMessages.classList.add('error')
        formMessages.textContent = data.error
        return
      }
      return sendSuccess(data)
    })
    .catch(err => console.log('error:', err))
}

function sendSuccess(message) {
  formMessages.classList.remove('error')
  formMessages.classList.add('success')
  formMessages.textContent = message
  $('#contact-form input,#contact-form textarea').val('');
}


}
