import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  const [submittedData, setSubmittedData] = useState([]);

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
    <h3>Submitted Data</h3>
    {listOfSubmissions}
   </>
  );
}



export default Form;
