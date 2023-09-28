import React, { useState } from 'react';
import axios from 'axios';
import { HStack, Flex, Icon,Divider,Button,Heading,VStack } from '@chakra-ui/react'

function Adminuniversity() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [formData, setFormData] = useState({
    universityDescription: '',
    collegename: '',
    established: '',
    collegetype: '',
    location: '',
    approval: '',
    address: '',
    state: '',
    city: '',
    affiliatedby: '',
    collegecategory: '',
    courses: [],
    cutoffdata: [],
    website:'',
    mail:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleAddCourse = () => {
    const { course, branch, totalSeat, courseDuration, tuitionFee } = formData;
    if (course && branch && totalSeat && courseDuration && tuitionFee) {
      setFormData({
        ...formData,
        courses: [...formData.courses, { course, branch, totalSeat, courseDuration, tuitionFee }],
      });
    }
  };
  const handleAddCutoff = () => {
    const { seattype, counsellingtype, category, domicilecondition, round1rank2022, round2rank2022 } = formData;
    console.log('Before Adding Cutoff Data:', formData);
    if (seattype && counsellingtype && category && domicilecondition && round1rank2022 && round2rank2022) {
      setFormData({
        ...formData,
        cutoffdata: [...formData.cutoffdata, { seattype, counsellingtype, category, domicilecondition, round1rank2022, round2rank2022 }],
      });
    }
    console.log('After Adding Cutoff Data:', formData);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formDataToSend = {
        ...formData,
        image1, // Add image1 directly to the formDataToSend object
        image2, // Add image2 directly to the formDataToSend object
      };
      const response = await fetch('/api/uploadData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.status === 200) {
        setFormData({
          universityDescription: '',
          collegename: '',
          established: '',
          collegetype: '',
          location: '',
          approval: '',
          address: '',
          state: '',
          city: '',
          affiliatedby: '',
          collegecategory: '',
          courses: [],
          cutoffdata: [],
          website:'',
          mail:''
        });
        setImage1(null);
        setImage2(null);


        console.log(formData.cutoffdata)
        alert('Data added successfully');
      } else {
        console.error('Error adding data');
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  console.log(image1)
  console.log(image2)


  return (
    <div style={{marginTop:"20vh"}}>
      <h1>Admin University</h1>
      <form method="POST" action="/uploadData" encType="multipart/form-data" onSubmit={handleSubmit}>
        {/* Input fields for University Description */}
        <h2>University Description</h2>
        <textarea
  style={{
    width: '85vw',
    height: '80vh',
    fontSize: '1.2rem',
    border: '1px solid #ccc', // Add a border for better visibility
    padding: '10px', // Add padding for spacing
    boxSizing: 'border-box', // Ensure padding and border are included in the width
    verticalAlign: 'top',
    overflowY: 'auto', // Add a scrollbar if content exceeds the height
    whiteSpace: 'pre-wrap', // Preserve line breaks
    wordWrap: 'break-word', // Wrap long words
  }}
  name="universityDescription"
  placeholder="University Description"
  value={formData.universityDescription}
  onChange={handleChange}
/>

        {/* ... (Input fields for other University Description fields) */}

        {/* Input fields for College Name */}

        <div>

        </div>
        <h2>College Name</h2>
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="collegename"
      placeholder="College Name"
      value={formData.collegename}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="established"
      placeholder="Established"
      value={formData.established}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="collegetype"
      placeholder="College Type"
      value={formData.collegetype}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="location"
      placeholder="Location"
      value={formData.location}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="approval"
      placeholder="Approval"
      value={formData.approval}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="address"
      placeholder="Address"
      value={formData.address}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="state"
      placeholder="State"
      value={formData.state}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="city"
      placeholder="City"
      value={formData.city}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="affiliatedby"
      placeholder="Affiliated By"
      value={formData.affiliatedby}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="collegecategory"
      placeholder="College Category"
      value={formData.collegecategory}
      onChange={handleChange}
    />
  </div>

  {/* Continue repeating the above pattern for the remaining input pairs */}
</div>



        {/* ... (Input fields for other College Name fields) */}

        {/* Input fields for Courses */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2>Courses</h2>
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="course"
      placeholder="Course"
      value={formData.course}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="branch"
      placeholder="Branch"
      value={formData.branch}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="totalSeat"
      placeholder="Total Seat"
      value={formData.totalSeat}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="courseDuration"
      placeholder="Course Duration"
      value={formData.courseDuration}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'center', width: '65vw' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="tuitionFee"
      placeholder="Tuition Fee"
      value={formData.tuitionFee}
      onChange={handleChange}
    />
    
    
  </div>
  <Button style={{fontSize:'2.5rem',marginTop:'4vh',cursor:'pointer',border:"3px solid #014BEC",width:'65%' ,borderRadius:'20px'}}  _hover={{backgroundColor:'#014BEC'}} marginBottom={'3vh'}  onClick={handleAddCourse}>Add Course</Button>
</div>


        {/* Input fields for Cutoff Data */}
        
        

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2>Cutoff Data</h2>
  
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="seattype"
      placeholder="Seat Type"
      value={formData.seattype}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="counsellingtype"
      placeholder="Counselling Type"
      value={formData.counsellingtype}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="category"
      placeholder="Category"
      value={formData.category}
      onChange={handleChange}
    />

  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="domicilecondition"
      placeholder="Domicile Condition"
      value={formData.domicilecondition}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="round1rank2022"
      placeholder="Round 1 Rank Year 2022"
      value={formData.round1rank2022}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'space-between', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem', marginRight: '10px' }}
      type="text"
      name="round2rank2022"
      placeholder="Round 2 Rank Year 2022"
      value={formData.round2rank2022}
      onChange={handleChange}
    />

    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="website"
      placeholder="Website"
      value={formData.website}
      onChange={handleChange}
    />
  </div>

  <div style={{ display: 'flex', justifyContent: 'center', width: '65vw', marginBottom: '10px' }}>
    <input
      style={{ flex: 1, height: '6vh', fontSize: '1.2rem' }}
      type="text"
      name="mail"
      placeholder="Mail"
      value={formData.mail}
      onChange={handleChange}
    />
    
  </div>

  <Button style={{fontSize:'2.5rem',marginTop:'4vh',cursor:'pointer',border:"3px solid #014BEC",width:'65%' ,borderRadius:'20px'}}  _hover={{backgroundColor:'#014BEC'}} marginBottom={'3vh'}  onClick={handleAddCutoff}>Add Cutoff</Button>
</div>


        {/* Image 1 upload */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2>Upload Banner Image</h2>
  <input type="file" name="image1" accept="image/*" onChange={handleImage1Change} style={{ marginBottom: '10px',fontSize:'1.5rem' ,textAlign:'center'}} />

  <h2>Upload Logo Image</h2>
  <input type="file" name="image2" accept="image/*" onChange={handleImage2Change} style={{ marginBottom: '10px',fontSize:'1.5rem' }} />

  
  
  {/* ... Rest of the Cutoff Data input fields with the previous style ... */}
</div>

<Button style={{fontSize:'2.5rem',marginTop:'4vh',cursor:'pointer',border:"3px solid #014BEC",width:'65%' ,borderRadius:'20px'}}  _hover={{backgroundColor:'#014BEC'}} marginBottom={'3vh'}  onClick={handleSubmit}>Add Data</Button>
      </form>
    </div>
  );
}

export default Adminuniversity;
