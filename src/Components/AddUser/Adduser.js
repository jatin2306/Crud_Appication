import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Alert
} from '@mui/material';
import './Adduser.css';
import { Link } from 'react-router-dom';

const values = {
  name: '',
  age: '',
  gender: '',
};

const Adduser = () => {
  const [formdata, setformdata] = useState(values);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSuccess = () => {
    setSuccess(false);
  };

  const handleError = () => {
    setError(false);
  };

  const onValChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = { name: formdata.name, age: formdata.age, gender: formdata.gender };
    try {
      const response = await fetch("https://crudcrud.com/api/caeab3327418480f81c57a25edf8d9d7/unicorns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);

        setformdata(values);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <FormGroup>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="name">Full Name</InputLabel>
        <Input id="name" type="text" required onChange={onValChange} name="name" value={formdata.name} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="age">Age</InputLabel>
        <Input id="age" type="number" onChange={onValChange} name="age" value={formdata.age} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="gender">Gender</InputLabel>
        <Input id="gender" onChange={onValChange} name="gender" value={formdata.gender} />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add User
        </Button>
      </FormControl>
      <FormControl>
    <Link to={'/view'}>
    <Button variant="contained" color="primary" fullWidth>
      View Users
        </Button></Link>
      </FormControl>
      {success && (
        <Alert variant="filled" severity="success" onClose={handleSuccess}>
          Data added successfully.
        </Alert>
      )}
      {error && (
        <Alert variant="filled" severity="error" onClose={handleError}>
          Failed to add data.
        </Alert>
      )}
    </FormGroup>
  );
};

export default Adduser;
// import React, { useState } from 'react';
// import { FormGroup, FormControl, InputLabel, Input, Typography, Button, Alert, FormHelperText, FormControlLabel, RadioGroup, Radio } from '@mui/material';
// import './Adduser.css';
// const values = {
//   name: '',
//   age: '',
//   gender: '',
// }
// const Adduser = () => {
//   const [formdata, setformdata] = useState(values);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const [nameerrors, setnameErrors] = useState([]);
//   const [ageerrors, setageErrors] = useState([]);
//   const [gendererrors, setgenderErrors] = useState([]);

//   const handleSuccess = () => {
//     setSuccess(false);
//   };

//   const handleError = () => {
//     setError(false);
//   };

//   const onValChange = (e) => {
//     setformdata({ ...formdata, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const name = formdata.name.trim();
//     const age = formdata.age.trim();
//     const gender = formdata.age.trim();

//     const nameErrors = [];
//     const ageErrors = [];
//     const genderErrors = [];

//     if (name === '') {
//       nameErrors.push('Name should not be empty.');
//     } else if (name.length > 15) {
//       nameErrors.push('Name should be less than or equal to 15 characters.');
//     } else if (!/^[A-Z]/.test(name)) {
//       nameErrors.push('First letter of the name should be capitalized.');
//     }
//     if (age === '') {
//       ageErrors.push("Age cannot be empty");
//     } else if (age < 0) {
//       ageErrors.push("Age cannot be negative");
//     } else if (age > 101) {
//       ageErrors.push("Age cannot be more than 100");
//     }
//     if (gender === '') {
//       genderErrors.push("Gender cannot be empty");
//     }
//     setnameErrors(nameErrors);
//     setageErrors(ageErrors);
//     setgenderErrors(genderErrors);
//     return nameErrors.length === 0 && ageErrors.length === 0 && genderErrors.length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) {
//       return;
//     }
//     const obj = { name: formdata.name, age: formdata.age, gender: formdata.gender };

//     try {
//       const response = await fetch("https://crudcrud.com/api/e1fa77f7438545a08df575bbe4a7affb/unicorns", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(obj)
//       });


//       if (response.ok) {
//         setformdata(values);
//         setSuccess(true);
//         setTimeout(() => {
//           setSuccess(false);
//         }, 2000);

//       } else {
//         setError(true);
//         setTimeout(() => {
//           setError(false);
//         }, 2000);
//       }
//     } catch (error) {
//       setError(true);
//       setTimeout(() => {
//         setError(false);
//       }, 2000);
//     }
//   };

//   return (
//     <FormGroup>
//       <Typography variant="h4">Add User</Typography>
//       <FormControl>
//         <InputLabel htmlFor="name">Full Name</InputLabel>
//         <Input id="name" type="text" required onChange={onValChange} name="name" />
//         {nameerrors.map((error, index) => (
//           <FormHelperText key={index} error>
//             {error}
//           </FormHelperText>
//         ))}
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="age">Age</InputLabel>
//         <Input id="age" type="number" onChange={onValChange} name="age" />
//         {ageerrors.map((error, index) => (
//           <FormHelperText key={index} error>
//             {error}
//           </FormHelperText>
//         ))}
//       </FormControl>
//       <FormControl>
//         <InputLabel htmlFor="gender">Gender</InputLabel>
//         <RadioGroup
//           row
//           name="gender"
//         >
//           <FormControlLabel value="female" checked={formdata.gender === "female"} control={<Radio />} label="Female" onChange={onValChange} />
//           <FormControlLabel value="male" control={<Radio />} checked={formdata.gender === "male"} label="Male" onChange={onValChange} />
//           <FormControlLabel value="other" control={<Radio />} label="Other" checked={formdata.gender === "other"} onChange={onValChange} />
//         </RadioGroup>
//         {gendererrors.map((error, index) => (
//           <FormHelperText key={index} error>
//             {error}
//           </FormHelperText>
//         ))}
//       </FormControl>
//       <FormControl>
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Add User
//         </Button>
//       </FormControl>

//       {success && (
//         <Alert variant="filled" severity="success" onClose={handleSuccess}>
//           Data added successfully.
//         </Alert>
//       )}
//       {error && (
//         <Alert variant="filled" severity="error" onClose={handleError}>
//           Failed to add data.
//         </Alert>
//       )}
//     </FormGroup>
//   );
// };

// export default Adduser;
