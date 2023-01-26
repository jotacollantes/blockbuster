import Swal from 'sweetalert2'



export const alert =()=>{
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Error al conectarse al servidor ',
    footer: '<a href="https://blockbuster-ten.vercel.app/">Intente nuevamente</a>'
  })
}

