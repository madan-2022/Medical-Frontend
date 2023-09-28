import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { StickyContainer, Sticky } from 'react-sticky';
import { FaGlobe } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import img1 from './facts-icon2.png'
import img2 from './facts-icon3.png'
import img3 from './facts-icon4.png'
import img4 from './facts-icon7.png'
import './Collegepage.css'




import {
  Container,
  Grid,
  Box,
  Text,
  Icon,
  HStack,
  Flex,VStack
} from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';


function CollegePage() {
  const { collegename } = useParams(); // Access the 'collegename' parameter from the URL

  const [collegeData, setCollegeData] = useState(null);

  useEffect(() => {   
    const fetchCollegeData = async () => {
      try {
        const response = await fetch(`/api/college/${collegename}`);
        if (response.status === 200) {
          const data = await response.json();
          setCollegeData(data);
        } else {
          console.error('Error fetching college data');
        }
      } catch (error) {
        console.error('Error fetching college data:', error);
      }
    };

    fetchCollegeData();
  }, [collegename]); // Include 'collegename' in the dependency array

  if (!collegeData) {
    return <div>Loading...</div>;
  }

  const tableStyle = {
    borderCollapse: 'collapse',
    marginTop:"5vh",
    width: '100%',
    border: 'none', 
  };

  const cellStyle = {
    border: '1px solid #000',
    padding: '8px',
    textAlign: 'center',
    border:'none'
  };

  const boldCellStyle = {
    ...cellStyle,
    color:'#014BEC',
    fontWeight: 'bold',
    border:'none'
  };

  const lightGreyCellStyle = {
    ...cellStyle,
    backgroundColor: '#d3d3d3',
    border:'none'
  };

  const separatorCellStyle = {
    ...cellStyle,
    borderBottom: '1px solid #000',
    border:'none'
  };

  const bodyStyle = {
    fontFamily: "'Rubik', sans-serif",
    // Add other CSS styles as needed
  };




 

  // Apply the style to the body element
  document.body.style = Object.assign({}, document.body.style, bodyStyle);

  
  return (
    <div style={{width:'100%',marginTop:"18vh"}} >
      <Box m={'0 auto'}   width={'100vw'}  marginTop={'5vh'} >
        <Box style={{fontSize:'1.9rem',color:"#01B4EC",position:'relative'}}>
        <img style= {{width:'80%',fontWeight:'600'}}src={collegeData.image1} alt="Image 1" />
        <Box style={{width:'16vw',height:"23vh" ,backgroundColor:"white",position:"absolute",bottom:"-4vh",left:'13vw',border:'1px solid #014BEC',borderRadius:'10px'}}>
        <img style= {{fontWeight:'600',}}src={collegeData.image2} alt="Image 2" />
        </Box>
        <Box style={{ textAlign: 'center' }}>
  <Text style={{ fontSize: '2.5rem', fontWeight: '600',marginLeft:"18vw" }}>{collegename}</Text>

  <Flex style={{ color: 'black', fontSize: '1.2rem', justifyContent: 'center' }}>
    <Icon style={{ fontWeight: '100',marginLeft:"18vw" }} as={FaMapMarkerAlt} />
    <Text style={{ textAlign: 'center' }}>{collegeData.location}, {collegeData.state}</Text>
  </Flex>
</Box>


          
        </Box>


        




        <Box style={{fontSize:'1.7rem', textAlign:"start",marginTop:'6vh',background:'#ECECEC',width:'100vw'}}>

        <Box >
          <HStack style={{justifyContent:"space-around"}}>
            <Box style={{width:'20vw',height:'15vh',backgroundColor:'white',marginTop:"10vh",border:"1px solid #87cefa",borderRadius:'10px',borderBottom:'5px solid #014BEC'}}>
            <Flex style={{justifyContent:"center",alignItems:'center',height:"100%"}}>
                <img style={{marginRight:'2vw'}} src={img1 }></img>
                <Box>
                <Text fontWeight={'bold'}>
                  Established
                </Text>
                <Text textAlign={'center'}>
                  2022
                </Text>
                </Box>

             </Flex>

            </Box>



            <Box style={{width:'20vw',height:'15vh',backgroundColor:'white',marginTop:"10vh",border:"1px solid #87cefa",borderRadius:'10px',borderBottom:'5px solid #014BEC'}}>
            <Flex style={{justifyContent:"center",alignItems:'center',height:"100%"}}>
                <img style={{marginRight:'2vw'}} src={img2 }></img>
                <Box>
                <Text fontWeight={'bold'}>
                  College Type
                </Text>
                <Text textAlign={'center'}>
                  Public
                </Text>
                </Box>

             </Flex>

            </Box>
            

            <Box style={{width:'20vw',height:'15vh',backgroundColor:'white',marginTop:"10vh",border:"1px solid #87cefa",borderRadius:'10px',borderBottom:'5px solid #014BEC'}}>
            <Flex style={{justifyContent:"center",alignItems:'center',height:"100%"}}>
                <img style={{marginRight:'2vw'}} src={img3 }></img>
                <Box>
                <Text fontWeight={'bold'}>
                  Location
                </Text>
                <Text textAlign={'center'}>
                  Sirohi
                </Text>
                </Box>

             </Flex>

            </Box>

            <Box style={{width:'20vw',height:'15vh',backgroundColor:'white',marginTop:"10vh",border:"1px solid #87cefa",borderRadius:'10px',borderBottom:'5px solid #014BEC'}}>
            <Flex style={{justifyContent:"center",alignItems:'center',height:"100%"}}>
                <img style={{marginRight:'2vw'}} src={img4 }></img>
                <Box>
                <Text fontWeight={'bold'}>
                  Approval
                </Text>
                <Text textAlign={'center'}>
                  Permitted
                </Text>
                </Box>

             </Flex>

            </Box>
          </HStack>
        </Box>
          <Box width={'80vw'} margin={'0 auto'}>
          <Flex>
            <Box style={{width:'57vw'}}>
              <Box style={{backgroundColor:'white', marginTop:'6vh',fontWeight:'40',fontSize:'1.4rem',padding:"4vw",  boxShadow:"10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)", borderWidth:"1px",
  border:"2px solid #01B4EC",
  borderRadius:"35px"
}} >
                <Text textAlign={'center'}  fontSize={'3rem'} fontWeight={'600'}>{collegeData.collegename}</Text>
              <p style={{color: '#333',marginTop:'3vh', fontFamily: 'Roboto, sans-serif',fontWeight:'100'}} dangerouslySetInnerHTML={{ __html: collegeData.universityDescription }} ></p>
              <table style={tableStyle} >
      <thead style={{color:'black'}}>
        <tr style={{backgroundColor:"#01B4EC"}}>
          <th style={{fontSize:"1.75rem"}}>Particulars</th>
          <th style={{fontSize:"1.75rem"}}>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td style={boldCellStyle}>State</td>
          <td style={cellStyle}>{collegeData.state}</td>
        </tr>
        <tr style={lightGreyCellStyle}>
          <td style={boldCellStyle}>City</td>
          <td style={cellStyle}>{collegeData.city}</td>
        </tr>
        <tr >
          <td style={boldCellStyle}>Affiliated By</td>
          <td style={cellStyle}>{collegeData.affiliatedby}</td>
        </tr>
        <tr style={lightGreyCellStyle}>
          <td style={boldCellStyle}>College Category</td>
          <td style={cellStyle}>{collegeData.collegecategory}</td>
        </tr>
      </tbody>
    </table>

              </Box>




              <Box style={{width:'57vw'}}>
              <Box style={{backgroundColor:'white', marginTop:'7vh',fontWeight:'40',fontSize:'1.4rem',padding:"4vw", boxShadow:"10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)", borderWidth:"1px",
  border:"2px solid #01B4EC",
  borderRadius:"35px"}} >
                <Text style={{color:'#014BEC',fontSize:'2rem',fontWeight:"600",textAlign:'center'}}>COURSE, FEES, DURATION AND FEES OF</Text>
                
                <Text style={{fontSize:'2rem',fontWeight:"600",textAlign:'center'}}>{collegeData.collegename}</Text>



              <table style={tableStyle} >
      <thead style={{color:'black'}}>
      
        <tr style={{backgroundColor:"#01B4EC"}}>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Course</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Branch</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Total Seat</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Course Duration</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Tuition Fee</th>
          
        </tr>
      </thead>






      
      <tbody style={{textAlign:'center'}}>


      
  {collegeData.courses.map((course, index) => (
    <tr key={index} style={{ backgroundColor: index % 2 !== 0 ? 'lightgrey' : 'white' }}>
      <td style={{height:"3rem"}}>{course.course}</td>
      <td>{course.branch}</td>
      <td>{course.totalSeat}</td>
      <td>{course.courseDuration}</td>
      <td>{course.tuitionFee}</td>
    </tr>
  ))}










       
      </tbody>
    </table>






   


                </Box>

              </Box>






              <Box style={{width:'57vw'}}>
              <Box style={{backgroundColor:'white', marginTop:'7vh',fontWeight:'40',fontSize:'1.4rem',padding:"4vw", boxShadow:"10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)", borderWidth:"1px",
  border:"2px solid #01B4EC",
  borderRadius:"35px"}} >
                <Text style={{color:'#014BEC',fontSize:'2rem',fontWeight:"600",textAlign:'center'}}>CUTOFFS</Text>
                
                <Text style={{fontSize:'2rem',fontWeight:"600",textAlign:'center'}}>{collegeData.collegename}</Text>



              <table style={tableStyle} >
      <thead style={{color:'black'}}>
      
        <tr style={{backgroundColor:"#01B4EC"}}>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Seat Type</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Counselling Type</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Category</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Domicile Condition</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Round 1 Rank Year 2022</th>
          <th style={{fontSize:"1.45rem",textAlign:'center'}}>Round 2 Rank Year 2022</th>
          
        </tr>
      </thead>






      
      <tbody>
    {collegeData.cutoffdata.map((cutoff, index) => (
      <tr key={index} style={{ backgroundColor: index % 2 !== 0 ? 'lightgrey' : 'white' }}>
        <td style={{ textAlign: 'center',height:"3rem" }}>{cutoff.seattype}</td>
        <td style={{ textAlign: 'center' }}>{cutoff.counsellingtype}</td>
        <td style={{ textAlign: 'center' }}>{cutoff.category}</td>
        
        <td style={{ textAlign: 'center' }}>{cutoff.domicilecondition}</td>
        <td style={{ textAlign: 'center' }}>{cutoff.round1rank2022}</td>
        <td style={{ textAlign: 'center' }}>{cutoff.round2rank2022}</td>
      </tr>
    ))}
  </tbody>
    </table>






   


                </Box>

              </Box>


              
            
           
            </Box>


            <StickyContainer>
            <Sticky topOffset={-200} bottomOffset={200}  stickyStyle={{ zIndex: 1 }}>
        {({ style }) => (
          <div style={{ ...style,marginLeft:"5vw", marginTop:'20vh', background: 'rgba(255, 0, 0, 0.7)', width: '25vw', height: '60vh', position: 'fixed' , backgroundColor:'white', boxShadow:"10px 14px 16px rgba(1, 75, 236, 0.1), 10px 11px 13px rgba(1, 75, 236, 0.1)", borderWidth:"1px",
          border:"2px solid #01B4EC",
          borderRadius:"35px"}}>

            <VStack width={'25vw'}>
              <Text style={{fontsize:'1rem', marginTop:'5vh',fontWeight:'600'}}>Contact Details</Text>

              <Box style={{fontSize:'1.5rem'}}>
              <Flex style={{ color: 'black',  marginTop:'5vh', justifyContent: 'center' }}>
    <Icon style={{ fontWeight: '100' }} as={FaMapMarkerAlt} />
    <Text style={{fontWeight:'600',textAlign:'start'}}>Address</Text>
  </Flex>
  <Text style={{ textAlign: 'center' ,color:"#014BEC"}}>{collegeData.location}, {collegeData.state}</Text>

              </Box>
              

              <Box style={{ fontSize: "1.5rem", width: '100%', overflow: 'hidden' }}>
  <Flex style={{ color: 'black', marginTop: '5vh', justifyContent: 'center' }}>
    <FaGlobe style={{ fontWeight: '100' }} />
    <Text style={{ fontWeight: '600', textAlign: 'start' }}> website</Text>
  </Flex>
  <Box width={'20vw'} style={{ marginLeft:"2vw" ,overflow: 'hidden', wordWrap: 'break-word', textAlign: 'center' }}>
    <Text style={{ color: '#014BEC', fontSize: '1.5rem' }}>{collegeData.website}</Text>
  </Box>
</Box>




<Box style={{fontsize:"1.5rem"}}>
  <Flex style={{ color: 'black', marginTop:'5vh', justifyContent: 'center' }}>
  <FaEnvelope style={{ fontWeight: '100',textAlign:'center' }} />
    <Text style={{fontWeight:'600',textAlign:'center'}}>Mail</Text>
  </Flex>
  <Text style={{ textAlign: 'center' ,color:'#014BEC',fontSize:'1.5rem'}}>{collegeData.mail}</Text>
  </Box>
            </VStack>

            
           
          </div>
        )}
      </Sticky>

      </StickyContainer>


            <Box style={{position:'absolute',right:'28vw',bottom:"80vh"}}>


            
            </Box>



            
          
          </Flex>

          </Box>

          

        </Box>
      
      

      
      
      </Box>

      
      



      
 
      {/* Display other college data here */}
     

      
    </div>
  );
}

export default CollegePage;
