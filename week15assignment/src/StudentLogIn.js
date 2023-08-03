import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";

function StudentLogIn(){
  //add url 
  const API_URL = 'https://64c5aeebc853c26efadaea42.mockapi.io/PT15/students'
  //any variables needed 
  const [students, setStudents] = useState([{
    //can set a default if want to
  }])

  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [updatedFirst, setUpdatedFirst] = useState('')
  const [updatedLast, setUpdatedLast] = useState('')
  const [updatedEmail, setUpdatedEmail] = useState('')
  const [updatedPassword, setUpdatedPassword] = useState('')

  //get user function
  function getStudents(){
    fetch(API_URL)
    .then(data => data.json())
    .then(data => setStudents(data))
    // .then(data => console.log(data))
  }

  useEffect(() => {
    //call function in here
    getStudents()
    // console.log(users)
  }, [])

  //create user function
  function newStudent(e){
    e.preventDefault()

    fetch(`${API_URL}`, {
      method: 'POST', 
      headers:{'Content-Type': "application/json"},
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        password: newPassword,
        //add these variables to the top
      })
    }).then(() => getStudents())

    // setNewFirstName = ''
    // setNewLastName = ''
    // setNewEmail = ''
    // setNewPassword = ''

  }
  
  //update user function
  function updateStudent(e, studentObject){
    e.preventDefault()

    let updateStudentObject = {
      ...studentObject, 
      firstName: updatedFirst,
      lastName: updatedLast, 
      email: updatedEmail, 
      password: updatedPassword,
    }

    fetch(`${API_URL}/${studentObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updateStudentObject),
      headers: {'Content-Type':'application/json'}
    }).then(() => getStudents())
  }

  // function updateForm(student){
  //   // console.log('this is good')
  //   //it goes through

  //   return(
  //     <form>
  //       <h3>Update This Student</h3>
  //       <label>Update First Name</label>
  //       <input onChange={(e) => setUpdatedFirst(e.target.value)}></input><br></br>
  //       <label>Update Last Name</label>
  //       <input onChange={(e) => setUpdatedLast(e.target.value)}></input><br></br>
  //       <label>Update Email</label>
  //       <input onChange={(e) => setUpdatedEmail(e.target.value)}></input><br></br>
  //       <label>Update Password</label>
  //       <input onChange={(e) => setUpdatedPassword(e.target.value)}></input><br></br>
  //       <button onClick={(e) => updateStudent(e, student)}>Update</button><br></br>
  //     </form>
  //   )
  // }

  //delete user function
  function deleteStudent(id){
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getStudents())
  }
  //return (our html)
  return(
    <div>
      <div className="newStudentForm">
        <form>
          <h3>New Student form </h3>
          <label>Student First Name</label>
          <input onChange={(e) => setNewFirstName(e.target.value)}></input>
          <label>Student Last Name</label>
          <input onChange={(e) => setNewLastName(e.target.value)}></input>
          <label>Email</label>
          <input onChange={(e) => setNewEmail(e.target.value)}></input>
          <label>Password</label>
          <input onChange={(e) => setNewPassword(e.target.value)}></input>
          <button onClick={(e) => newStudent(e)}>Submit</button>
        </form>
      </div>
      <div className="studentTable">
        <table>
          <thead>
            <tr>
              <th>Student First Name</th>
              <th>Student Last Name</th>
              <th>Student Email</th>
              <th>Student Password</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.password}</td>
                <td>
                  <form>
                    <h3>Update This Student</h3>
                    <label>Update First Name</label>
                    <input onChange={(e) => setUpdatedFirst(e.target.value)}></input><br></br>
                    <label>Update Last Name</label>
                    <input onChange={(e) => setUpdatedLast(e.target.value)}></input><br></br>
                    <label>Update Email</label>
                    <input onChange={(e) => setUpdatedEmail(e.target.value)}></input><br></br>
                    <label>Update Password</label>
                    <input onChange={(e) => setUpdatedPassword(e.target.value)}></input><br></br>
                    <button onClick={(e) => updateStudent(e, student)}>Update</button><br></br>
                  </form>
                </td>
                <td>
                  <button onClick={() => deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default StudentLogIn