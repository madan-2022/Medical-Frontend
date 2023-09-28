// UPUniversities.js


import {
    Container,
    Grid,
    Box,
    Text,
  } from '@chakra-ui/react';
  import UniversityCard from '../Courseuniversity/UniversityCard';
  
  
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import img1 from '../bannerimg.jpg'
  
  function Rajasthan() {
    const [universities, setUniversities] = useState([]);
  
    useEffect(() => {
      // Fetch universities for Uttar Pradesh
      axios.get('http://localhost:5000/api/universities/Rajasthan')
  
        .then((response) => {
          setUniversities(response.data);
        })
        .catch((error) => {
          console.error('Error fetching universities:', error);
        });
    }, []);
  
    return (
      <div style={{marginTop:'18vh'}}>
         <Container maxW="container.xl" mt={50}>
          <img style={{width:'100vw',height:'35vh'}} src={img1}></img>
  
  
        <Text fontSize="2.5rem" fontWeight="bold" background={'#01B4EC'} mb={4}>
          
          Universities in Rajasthan
        </Text>
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
        <div style={{ display: 'flex', flexDirection: 'column',marginBottom: '6vh' }}>
    {universities.map((university) => (
      <UniversityCard key={university._id} university={university} style={{ marginBottom: '6vh' }} />
    ))}
  </div>
        </Grid>
      </Container>
      </div>
    );
  }
  
  export default Rajasthan;
  