const url = "http://localhost:3000/students";
console.log(url);

//get url and add data from json on there
$.get(url).then(data => {
    data.map(student =>{
        $('tbody').append(
          `<tr>
            <td>${student.id}</td>
            <td>${student.lastName}</td>
            <td>${student.firstName}</td>
            <td>${student.grade}</td>
            <td>${student.dob}</td>
            <td><button onclick="deleteStudent(${student.id})">Delete</button></td>
          </tr>`
        )
    })
})

// submit button to add new students
$('#subBtn').click( function(e) {
    $.post(url, {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        grade: $('#grade').val(),
        dob: $('#dob').val(),
    });
});

function deleteStudent(id){
  $.ajax(`${url}/${id}`, {
    type: 'DELETE'
  })
}

function updateStudent(){
  let id = $('#studentId').val();

  $.ajax(`${url}/${id}`, {
    method: 'PUT',
    data: {
      firstName: $('#updateFirst').val(),
      lastName: $('#updateLast').val(),
      grade: $('#updateGrade').val(),
      dob: $('#updateDob').val(),
    }
  })
}

$('#updateBtn').click(updateStudent);