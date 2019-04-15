const btnBuscaPacientes = document.querySelector('#buscar-pacientes')

btnBuscaPacientes.addEventListener('click', (event) => {
  event.preventDefault()

  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
  xhr.addEventListener('load', () => {
    
    const erroAjax = document.querySelector('#erro-ajax')

    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel')
      const resposta = xhr.responseText
      const pacientes = JSON.parse(resposta)
      pacientes.forEach(paciente => {
        adcicionaPacienteNaTabela(paciente)
      })
    } else {
      erroAjax.classList.remove('invisivel')
    }
  })
  xhr.send()
})