
import React, {useState} from 'react'

export const Demo = () => {

    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const[value, setValue] = useState({  
     name:"",
    email:"",
    password:""
})

    const keyHandler = (e) =>{
          setData({...data, 
            [e.target.name]:e.target.value.trim()
     
                })
    }
    
    const   submit = (e) => {
        e.preventDefault();
        console.log(data)   

    }
  return (
      <>
      <form >
          <label htmlFor="#">Name
          <input  placeholder='enter name' value={data.name} name="name" onChange={keyHandler} />
          </label>

          <label htmlFor="#">Email
          <input   placeholder='enter name' value={data.email} name="email" onChange={keyHandler} />
          </label>

          <label htmlFor="#">Password
          <input   placeholder='enter name' value={data.password} name="password" onChange={keyHandler} />
          </label>
          <button  onClick={submit} type="submit">submit</button>
      </form>
      </>
  )
}

export default Demo

// import React, {useState} from 'react'
  

// export  const Demo = () => {
//     const [formData, updateFormData] = React.useState({
//         username:'',
//         email:'',
//         password:""
//     });
  
//     const handleChange = (e) => {
//       updateFormData({
//         ...formData,
  
//         [e.target.name]: e.target.value.trim()
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       console.log(formData);
//     };
  
//     return (
//       <>
//         <label>
//           Username
//           <input name="username" onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Email
//           <input name="email" onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Password
//           <input name="password" onChange={handleChange} />
//         </label>
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </>
//     );
//   };
  