import React, { useState } from "react";

function Form() {
  const [name, setName] = useState({
    firstName: "Aimkeys",
    lastName: "Mwaura",
    isMember:false
  });
  function handleNameChange(event) {
    const targetName=event.target.name
    setName({...name,[targetName]:event.target.type==="checkbox"?event.target.checked:event.target.value});
  }
  return (
    <form>
      <input type="text" onChange={handleNameChange} name={"firstName"} value={name.firstName} />
      <input type="text" onChange={handleNameChange} name="lastName" value={name.lastName} />
      <input type="checkbox" onChange={handleNameChange} name="isMember" checked={name.isMember}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
