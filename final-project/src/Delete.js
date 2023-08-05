export default function Delete (URL, id){
  fetch(`${URL}/${id}`, {
    method: 'DELETE'
  })
}

//need to connect it to the read books & tbr
