import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  const [submittedData, setSubmittedData] = useState([]);

  //Creating a state that will be used to store the errors
  const [errors, setErrors]=useState("")

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit (event)
  {
    //Preventing page from reloading once form is submitted
    event.preventDefault()

    //Checking if the firstName has been given a value
    if(firstName.length > 0)
    {
      //Creating a form data object with the input field values
      const formData=
      {
        firstName: firstName,
        lastName: lastName
      }

      //Creating a new array by fetching the value from the submittedData array and adding the formData object created using the values passed in
      const dataArray=[...submittedData, formData]

      //Setting the submittedData array to the created dataArray
      setSubmittedData(dataArray)

      //Setting the firstName and lastName states to empty strings
      setFirstName('')
      setLastName("")
    }
    else
    {
      //Setting an error message that will be displayed to the user
      setErrors(["First name is required!"])
    }
  }

  //Looping over the submittedData array to render the list of submission
  const listOfSubmissions= submittedData.map((data, index)=>
  {
    return(
      <div key={index}>{data.firstName} {data.lastName}</div>
    )
  })

  return (
   <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>Submitted Data</h3>
    {listOfSubmissions}
   </>
  );
}



export default Form;
