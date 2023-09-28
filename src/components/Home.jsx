import React from 'react'
import banner from './main-hero2.png';
import img1 from './college-icon2.png';
import img2 from './college-icon3.png';
import img3 from './istockphoto-532548555-170667a.jpg';
import { StarIcon } from '@chakra-ui/icons';
import { Box, background, position } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { HStack, Flex, Icon,Divider,Button,Heading,VStack } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import img4 from './russia.png'
import img5 from './Bangladesh.jpg'
import img6 from './Nepal.webp'
import img7 from './Kazakhstan.png'
import img8 from './flag-round-250.png'
import img9 from './about-thumbnail.jpg'
import img10 from './service-icon1.png'
import img11 from './service-icon2.png'
import img12 from './service-icon3.png'
import img13 from './service-icon4.png'

import img14 from './service-icon5.png'
import img15 from './service-icon6.png'
import img16 from './blog-1.jpg'
import img17 from './istockphoto-1447889800-170667a.webp'
import img18 from './istockphoto-532548555-170667a.jpg'
import img19 from './call-us.jpg'
import './Home.css'
const Home = () => {
  return (
    <div style={{marginTop:"18vh"}}>
        <div className='banner' style={{width:'100vw',height:'75vh',marginTop:'4vh'}}>
            

        </div>


        <Box  className='container1' style={{

        
width: '100vw',                      
height: '75vh',  
display:'flex',
justifyContent:'center',
flexDirection:'column',
alignItems:'center'

                  
}} >
<Heading as="h2"   style={{fontSize:'5rem'}} size="xl"  >
 
 <span style={{color:'#01B4EC'}}>Get Start With Option</span>
 
</Heading>
<HStack>
<Box w={'37vw'} h={'40vh'}  background={'white'} mt={'100'}  mr={'80'}   boxShadow="0 2px 4px rgba(0, 0, 0, 0.7)" display="flex" flexDirection="column" alignItems={'center'} borderRadius={"20px"} backgroundColor={'#01B4EC'}  transition="transform 0.2s ease-in-out" cursor={'pointer'}// Add smooth transition
        _hover={{ transform: 'translateY(-5px) scale(1.05)' }} >

<Box  width={'100%'} height={'100%'} display={'flex'}   position={'relative'} >
    <img src={img1} style={{position:'absolute',top:'10px',right:'5px',width:'8vw'}}></img>
    <Box  marginTop={'2vw'} marginLeft={'2vw'}>
    <Text fontSize={'2.5rem'} fontWeight={'600'}>Medical In India</Text>

    
<Text marginTop={'2vw'} marginLeft={'2vw'} fontSize={'2.5rem'} backgroundColor={'#91D8F5'}>Find India's Top Colleges </Text>

<HStack position={'absolute'} bottom={'2vh'} left={'2vw'}>
<StarIcon color="white" boxSize={30} />

<Text  fontSize={'1.25rem'}>4.5(23765 rating) </Text>

</HStack>


<HStack position={'absolute'} bottom={'2vh'} right={'2vw'} >

<Icon as={FaUser} boxSize={30} color="white" />
<Text  fontSize={'1.25rem'}>87000 learners </Text>

</HStack>





    </Box>
    




    

</Box>




</Box>

<Box w={'37vw'} h={'40vh'}  background={'white'} mt={'100'}  mr={'80'}   boxShadow="0 2px 4px rgba(0, 0, 0, 0.7)" display="flex" flexDirection="column" alignItems={'center'} borderRadius={"20px"} backgroundColor={'#01B4EC'}  transition="transform 0.2s ease-in-out" cursor={'pointer'}// Add smooth transition
        _hover={{ transform: 'translateY(-5px) scale(1.05)' }} // Apply transformation on hover
      >

<Box  width={'100%'} height={'100%'} display={'flex'}   position={'relative'} >
    <img src={img2} style={{position:'absolute',top:'10px',right:'5px',width:'8vw'}}></img>
    <Box  marginTop={'2vw'} marginLeft={'2vw'}>
    <Text fontSize={'2.5rem'} fontWeight={'600'}>Medical In Abroad</Text>

    
<Text marginTop={'2vw'} marginLeft={'2vw'} fontSize={'2.5rem'} backgroundColor={'#91D8F5'}>Find World's Top Colleges </Text>

<HStack position={'absolute'} bottom={'2vh'} left={'2vw'}>
<StarIcon color="white" boxSize={30} />

<Text  fontSize={'1.25rem'}>4.5(23765 rating) </Text>

</HStack>


<HStack position={'absolute'} bottom={'2vh'} right={'2vw'} >

<Icon as={FaUser} boxSize={30} color="white" />
<Text  fontSize={'1.25rem'}>87000 learners </Text>

</HStack>





    </Box>
    




    

</Box>




</Box>
</HStack>


</Box>


<Box  className='container2' style={{

        
width: '100vw',                      
height: '75vh',  
display:'flex',
flexDirection:'column',
alignItems:'center'

                  
}} >
<Heading as="h2"   style={{marginTop:'5vhsssss'}} size="xl"  ></Heading>
 
 <span style={{fontSize:'2.5rem',color:'#01B4EC',fontWeight:'200'}}>STUDY ABROAD | TOP SCHOOLS, COLLAGES AND UNIVERSITIES IN ABROAD</span>
 <br/>

 <Text style={{marginTop:'2.5vh',fontSize:'2.5rem',color:'#000000'}}  >BETTER EDUCATION FOR A BETTER WORLD</Text>


<Box width={'90vw'} height={'16vh'} backgroundColor={'#91D8F5'} marginTop={'10vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'18px'}>
<HStack justifyContent={'center'} width={'100%'} alignItems={'center'} marginLeft={'4vw'}>
 <select className="dropdown" style={{fontSize:'1.75rem'}}>
  <option value="option1" >Looking For</option>
  <option value="option2">Medical in India</option>
  <option value="option3">Medical in Abroad</option>
</select>

<select className="dropdown" style={{fontSize:'1.75rem'}}>
  <option value="option1">Course Type</option>
  <option value="option2">Under Graduate</option>
  <option value="option3">Post Graduate</option>
</select>

<select className="dropdown" style={{fontSize:'1.75rem'}}>
  <option value="option1">Course Name</option>
  <option value="option2">MBBS</option>
  <option value="option3">BDS</option>
  <option value="option2">BAMS</option>
  <option value="option3">BHMS</option>
  <option value="option2">BUMS</option>
  <option value="option3">BPT</option>
  <option value="option2">Bsc Nursing</option>
  
</select>
 </HStack>


 

</Box>

<HStack marginTop={'7vh'}>
  <Box textAlign={'center'} border={'3px solid #01B4EC'} mr={'50'} width={'28vw'} borderRadius={'16px'}>


    <Text color={'#01B4EC'} fontSize={'5rem'} fontWeight={'600'}>
      859+
    </Text>
    <br/>
    <Text fontWeight={'300'}>
      Global University Tie Ups
    </Text>

  </Box>

  <Box textAlign={'center'} border={'3px solid #01B4EC'} mr={'50'} width={'28vw'} borderRadius={'16px'}>

    
<Text color={'#01B4EC'} fontSize={'5rem'} fontWeight={'600'}>
  2940+
</Text>
<br/>
<Text fontWeight={'300'}>
  Student placed
</Text>

</Box>

<Box textAlign={'center'} border={'3px solid #01B4EC'} width={'28vw'} borderRadius={'16px'}>

    
<Text color={'#01B4EC'} fontSize={'5rem'} fontWeight={'600'}>
  15%
</Text>
<br/>
<Text fontWeight={'300'}>
  Year of Industry Presence
</Text>

</Box>
 </HStack>



 
 
 
 


</Box>



<Box className='container16' style={{

     
width: '100vw',                      
height: '90vh',  
display:'flex',
// justifyContent:'center',
flexDirection:'column',
backgroundColor:'#CFEBFD',
alignItems:'center',
marginTop:'2vh'}} >


  <h2 style={{fontSize:'4rem',marginTop:'4vw' ,zIndex:'1'}}>Top Recommended
  <span style={{color:'#01B4EC'}}> Medical Colleges In India </span> </h2>
  <HStack style={{width:'100%',height:'100%'}}>
      <Box w={'20vw'} h={'55vh'}  background={'white'} mt={'30'}  mr={'10'} ml={'170'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'}  backgroundColor={'white'} zIndex={'1'}>
        
      <Box  width={'100%'} height={'37vh'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box className='container12' width={'100%'} height={'100%'} >

        </Box>
        

            

        </Box>

      <Box  width={'100%'} height={'18vh'}  fontSize={'1.25rem'}  display={'flex'}    flexDirection={'column'}  position={'relative'}>

        <h2>SRIMS Durgapur</h2>
        <Text fontSize={'1.25rem'} color={'#01B4EC'}>MBBS</Text>


        <Box position={'absolute'} left={'4px'} top={'4vw'}>
          <Flex>
          <FaMapMarkerAlt color='#01B4EC' fontSize={'1.7rem'} style={{marginRight:'4px'}} />
          <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
            Durgapur
          </Text>
          </Flex>


        </Box>

        <Box position={'absolute'} right={'4px'} top={'4vw'}>
          <Flex>
          <FaRegClock color='#01B4EC' fontSize={'1.4rem'} style={{marginRight:'4px'}} />
          <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
            private
          </Text>
          </Flex>


        </Box>

        <Box position={'absolute'} border={'3px solid #01B4EC'} borderRadius={'10px'} left={'4px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'#01B4EC'}}>
          
          
          <Text fontSize={'1.4rem'}  padding={'5px'} >
            View Details
          </Text>
         


        </Box>

        <Box position={'absolute'} right={'4px'} border={'3px solid #01B4EC'}  borderRadius={'10px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'white'}} backgroundColor={'#01B4EC'} >
          
          
          <Text fontSize={'1.4rem'}        padding={'5px'} >
            Apply Now
          </Text>
         


        </Box>


         


        </Box>


</Box>
<Box w={'20vw'} h={'55vh'}  background={'white'} mt={'30'}  mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'}  >
        
        <Box  width={'100%'} height={'37vh'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box className='container13' width={'100%'} height={'100%'} >
  
          </Box>
          
  
              
  
          </Box>
  
        <Box  width={'100%'} height={'18vh'}  fontSize={'1.25rem'}  display={'flex'}    flexDirection={'column'}  position={'relative'}>
  
          <h2>PRC Thiruvalla</h2>
          <Text fontSize={'1.25rem'} color={'#01B4EC'}>MBBS, DM, MCH, MD, MS</Text>
  
  
          <Box position={'absolute'} left={'4px'} top={'4vw'}>
            <Flex>
            <FaMapMarkerAlt color='#01B4EC' fontSize={'1.7rem'} style={{marginRight:'4px'}} />
            <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
              Thiruvalla
            </Text>
            </Flex>
  
  
          </Box>
  
          <Box position={'absolute'} right={'4px'} top={'4vw'}>
            <Flex>
            <FaRegClock color='#01B4EC' fontSize={'1.4rem'} style={{marginRight:'4px'}} />
            <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
              private
            </Text>
            </Flex>
  
  
          </Box>
  
          <Box position={'absolute'} border={'3px solid #01B4EC'} borderRadius={'10px'} left={'4px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'#01B4EC'}}>
            
            
            <Text fontSize={'1.4rem'}  padding={'5px'} >
              View Details
            </Text>
           
  
  
          </Box>
  
          <Box position={'absolute'} right={'4px'} border={'3px solid #01B4EC'}  borderRadius={'10px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'white'}} backgroundColor={'#01B4EC'} >
            
            
            <Text fontSize={'1.4rem'}        padding={'5px'} >
              Apply Now
            </Text>
           
  
  
          </Box>
  
  
           
  
  
          </Box>
  
  
  </Box>

  <Box w={'20vw'} h={'55vh'}  background={'white'} mt={'30'}  mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'}  >
        
        <Box  width={'100%'} height={'37vh'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box className='container14' width={'100%'} height={'100%'} >
  
          </Box>
          
  
              
  
          </Box>
  
        <Box  width={'100%'} height={'18vh'}  fontSize={'1.25rem'}  display={'flex'}    flexDirection={'column'}  position={'relative'}>
  
          <h2>Sharda University</h2>
          <Text fontSize={'1.25rem'} color={'#01B4EC'}>MBBS</Text>
  
  
          <Box position={'absolute'} left={'4px'} top={'4vw'}>
            <Flex>
            <FaMapMarkerAlt color='#01B4EC' fontSize={'1.7rem'} style={{marginRight:'4px'}} />
            <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
              Greater Noida
            </Text>
            </Flex>
  
  
          </Box>
  
          <Box position={'absolute'} right={'4px'} top={'4vw'}>
            <Flex>
            <FaRegClock color='#01B4EC' fontSize={'1.4rem'} style={{marginRight:'4px'}} />
            <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
              private
            </Text>
            </Flex>
  
  
          </Box>
  
          <Box position={'absolute'} border={'3px solid #01B4EC'} borderRadius={'10px'} left={'4px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'#01B4EC'}}>
            
            
            <Text fontSize={'1.4rem'}  padding={'5px'} >
              View Details
            </Text>
           
  
  
          </Box>
  
          <Box position={'absolute'} right={'4px'} border={'3px solid #01B4EC'}  borderRadius={'10px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'white'}} backgroundColor={'#01B4EC'} >
            
            
            <Text fontSize={'1.4rem'}        padding={'5px'} >
              Apply Now
            </Text>
           
  
  
          </Box>
  
  
           
  
  
          </Box>
  
  
  </Box>

  <Box w={'20vw'} h={'55vh'}  background={'white'} mt={'30'}  mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'}  >
        
        <Box  width={'100%'} height={'37vh'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box className='container15' width={'100%'} height={'100%'} >
  
          </Box>
          
  
              
  
          </Box>
  
        <Box  width={'100%'} height={'18vh'}  fontSize={'1.25rem'}  display={'flex'}    flexDirection={'column'}  position={'relative'}>
  
          <h2>PMC Udaipur</h2>
          <Text fontSize={'1.25rem'} color={'#01B4EC'}>MBBS</Text>
  
  
          <Box position={'absolute'} left={'4px'} top={'4vw'}>
            <Flex>
            <FaMapMarkerAlt color='#01B4EC' fontSize={'1.7rem'} style={{marginRight:'4px'}} />
            <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
              Udaipur
            </Text>
            </Flex>
  
  
          </Box>
  
          <Box position={'absolute'} right={'4px'} top={'4vw'}>
            <Flex>
            <FaRegClock color='#01B4EC' fontSize={'1.4rem'} style={{marginRight:'4px'}} />
            <Text fontSize={'1.4rem'} color={'rgba(0,0,0,0.7)'}>
              private
            </Text>
            </Flex>
  
  
          </Box>
  
          <Box position={'absolute'} border={'3px solid #01B4EC'} borderRadius={'10px'} left={'4px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'#01B4EC'}}>
            
            
            <Text fontSize={'1.4rem'}  padding={'5px'} >
              View Details
            </Text>
           
  
  
          </Box>
  
          <Box position={'absolute'} right={'4px'} border={'3px solid #01B4EC'}  borderRadius={'10px'} top={'6vw'} cursor={'pointer'} _hover={{backgroundColor:'white'}} backgroundColor={'#01B4EC'} >
            
            
            <Text fontSize={'1.4rem'}        padding={'5px'} >
              Apply Now
            </Text>
           
  
  
          </Box>
  
  
           
  
  
          </Box>
  
  
  </Box>



    </HStack>
  


  

</Box>



<Box className='container16' style={{

     
width: '100vw',                      
height: '60vh',  
display:'flex',
// justifyContent:'center',
flexDirection:'column',

alignItems:'center',
marginTop:'2vh'}} >


  <h2 style={{fontSize:'4rem',marginTop:'4vw' ,zIndex:'1'}}><span style={{color:'#01B4EC'}}> MBBS  </span> Abroad Countries
   </h2>

   <HStack>
  <Box w={'16vw'} h={'40vh'}  background={'#01B4EC'} mt={'60'} mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'} justifyContent={'center'}  borderRadius={'30px'} >
    <Box border={'3px solid white'} borderRadius={'130px'} >
      <img src={img4} style={{borderRadius:'130px',padding:"10px"}}></img>
      </Box>
      <Text fontSize={'2rem'} fontWeight={'600'} color={'white'} mt={'15'}>Russia</Text>
    </Box>

    <Box w={'16vw'} h={'40vh'}  background={'#01B4EC'} mt={'60'} mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'} justifyContent={'center'}  borderRadius={'30px'} >
    <Box border={'3px solid white'} borderRadius={'130px'} >
      <img src={img5} style={{borderRadius:'130px',padding:"10px"}}></img>
      </Box>
      <Text fontSize={'2rem'} fontWeight={'600'} color={'white'} mt={'15'}>Bangladesh</Text>
    </Box>



    <Box w={'16vw'} h={'40vh'}  background={'#01B4EC'} mt={'60'} mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'} justifyContent={'center'}  borderRadius={'30px'} >
    <Box border={'3px solid white'} borderRadius={'130px'} >
      <img src={img6} style={{borderRadius:'130px',padding:"10px"}}></img>
      </Box>
      <Text fontSize={'2rem'} fontWeight={'600'} color={'white'} mt={'15'}>Nepal</Text>
    </Box>


    <Box w={'16vw'} h={'40vh'}  background={'#01B4EC'} mt={'60'} mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'} justifyContent={'center'}  borderRadius={'30px'} >
    <Box border={'3px solid white'} borderRadius={'130px'} >
      <img src={img7} style={{borderRadius:'130px',padding:"10px"}}></img>
      </Box>
      <Text fontSize={'2rem'} fontWeight={'600'} color={'white'} mt={'15'}>Kazakhstan</Text>
    </Box>


    <Box w={'16vw'} h={'40vh'}  background={'#01B4EC'} mt={'60'} mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column" alignItems={'center'} justifyContent={'center'}  borderRadius={'30px'} >
    <Box border={'3px solid white'} borderRadius={'130px'} >
      <img src={img8} style={{borderRadius:'130px',padding:"10px"}}></img>
      </Box>
      <Text fontSize={'2rem'} fontWeight={'600'} color={'white'} mt={'15'}>Kyrgystan</Text>
    </Box>

    

    


  </HStack>
  </Box>

  <Box  className='container4' style={{

        
width: '100vw',                      
height: '90vh',  
display:'flex',
justifyContent:'center',
flexDirection:'column',
alignItems:'center',
marginTop:'6vh',
backgroundColor:'#CFEBFD'
                  
}} >

<h2 style={{fontSize:'4rem',marginTop:'5vh'}} >
    About Us
    <br/>

    <span style={{color:"#01B4EC",fontWeight:'200',marginTop:'18vh'}}> About Admission Possibility </span>  
    
    </h2>

<HStack style={{width:'100vw',height:'100%'}}>
 <div style={{marginLeft:'5%'}}>
  <img src={img9} style={{height:'60vh',width:'40vw'}}></img>
 </div>

 <Box style={{marginLeft:'6%',width:'50%',height:'100%'}}>

  

  <Box style={{width:"90%",height:"100%",fontSize:'1.5rem',marginTop:'3vh',color:'rgba(0,0,0,0.6)'}} >

  Welcome to Admission Possibility, your premier destination for aspiring medical students seeking the best MBBS colleges. With a dedicated team passionate about education, we're committed to simplifying your journey towards a medical career.

Our mission is to connect you with top-tier colleges and universities, providing comprehensive information about admission requirements, fees, faculty, and facilities. We offer personalized guidance, ensuring you make informed decisions about your future.

<Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
  <Text marginLeft={'10px'}>Confirmed Admission</Text>
  </Flex>

  </Box>



  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
  <Text marginLeft={'10px'}>Individual Candidate Profiling</Text>
  </Flex>

  </Box>



  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
  <Text marginLeft={'10px'}>College Level Clinical Analysis</Text>
  </Flex>

  </Box>



  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
  <Text marginLeft={'10px'}>NRI / Management Seats Counselling</Text>
  </Flex>

  </Box>


  <Box marginTop={'3vh'}>
<Flex>
  <Icon as={StarIcon} w={25} h={25} color="#01B4EC" />
  <Text marginLeft={'10px'}>Careful Financial Planning</Text>
  </Flex>

  </Box>






 </Box>

 

  


 

  
 </Box>



</HStack>







</Box>


<Box  className='container4' style={{

        
width: '100vw',                      
height: '60vh',  
display:'flex',

flexDirection:'column',

alignItems:'center',
marginTop:'6vh'
                  
}} >

  <h2>
    <Text >OUR SERVICES</Text>
    <Text fontSize={'2.5rem'} color={'#01B4EC'} fontWeight={'40'} marginTop={'1vh'}>Admission Possibility Services</Text></h2>

<HStack>
    <Box width={'14vw'} height={'30vh'} display={'flex'} borderRadius={'15px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} marginTop={'15vh'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.2)'}>
      <img src={img10}>

      </img>


      <Text fontWeight={'600'} fontSize={'1.25rem'}>College Predictors</Text>
      <Text color={'rgba(0,0,0,0.7)'} marginTop={'20'}>MBBS Buddy is India’s first data analytics based MBBS College predictor</Text>


    </Box>

    <Box width={'14vw'} height={'30vh'} display={'flex'} borderRadius={'15px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} marginTop={'15vh'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.2)'}>
      <img src={img11}>

      </img>


      <Text fontWeight={'600'} fontSize={'1.25rem'}>Expert Counsellors</Text>
      <Text color={'rgba(0,0,0,0.7)'} marginTop={'20'}>Our team comprises of best experts with more than a decade’s experience</Text>


    </Box>


    <Box width={'14vw'} height={'30vh'} display={'flex'} borderRadius={'15px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} marginTop={'15vh'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.2)'}>
      <img src={img12}>

      </img>


      <Text fontWeight={'600'} fontSize={'1.25rem'}>College Level Analysis
</Text>
      <Text color={'rgba(0,0,0,0.7)'} marginTop={'20'}>Our college visits give us real on ground student & patient feedback</Text>


    </Box>


    <Box width={'14vw'} height={'30vh'} display={'flex'} borderRadius={'15px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} marginTop={'15vh'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.2)'}>
      <img src={img13}>

      </img>


      <Text fontWeight={'600'} fontSize={'1.25rem'}>Transparent Process</Text>
      <Text color={'rgba(0,0,0,0.7)'} marginTop={'20'}>Transparency through process driven systematic approach</Text>


    </Box>

    <Box width={'14vw'} height={'30vh'} display={'flex'} borderRadius={'15px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} marginTop={'15vh'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.2)'}>
      <img src={img14}>

      </img>


      <Text fontWeight={'600'} fontSize={'1.25rem'}>Personolised Guidance</Text>
      <Text color={'rgba(0,0,0,0.7)'} marginTop={'20'}>Personalised services with right fit to the right student</Text>


    </Box>


    <Box width={'14vw'} height={'30vh'} display={'flex'} borderRadius={'15px'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} marginTop={'15vh'} boxShadow={'5px 5px 10px rgba(0, 0, 0, 0.2)'}>
      <img src={img15}>

      </img>


      <Text fontWeight={'600'} fontSize={'1.25rem'}>Alerts & Notification</Text>
      <Text color={'rgba(0,0,0,0.7)'} marginTop={'20'}>Date, Time & Other NEET Updates & Notification on SMS & Email</Text>


    </Box>


    </HStack>



</Box>

<Box className='container16' style={{

     
width: '100vw',                      
height: '90vh',  
display:'flex',

flexDirection:'column',
backgroundColor:'#CFEBFD',
alignItems:'center'
}} >


  <h2 style={{fontSize:'4rem',marginTop:'1vw' ,zIndex:'1'}}>Our Blogs
  <br/>
  <span style={{color:'#01B4EC',fontWeight:"100"}}> Latest news and blogs </span> </h2>
  <HStack style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center'}}>
      
<Box w={'27vw'} h={'65vh'}  background={'white'} mt={'10'}  mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column"  position={'relative'} alignItems={'center'} cursor={'pointer'}  borderRadius={'10px'}>
        
      
          <Box className='container18' width={'100%'} height={'70%'} >
  
          
          
  
              
  
          </Box>
          <Box textAlign={'center'} width={'6vw'} height={'11vh'}  backgroundColor={'#01B4EC'} position={'absolute'} top={'18vw'} left={'0vw'} borderRadius={'15px'}>
            <Text color={'white'}>
              <span style={{fontSize:"2.5rem",fontWeight:'600'}}>25</span>
<br/>
              <span style={{fontSize:'1.5rem'}}> Feb 2023</span>
            </Text>
          </Box>

          <Box width={'100%'} height={'30%'} textAlign={'center'} fontSize={'1.5rem'} position={'absolute'} bottom={'-10vh'} >
          Unlocking Your Future: Top Colleges for MBBS

          </Box>

          
  
        
  
  
  </Box>

  <Box w={'27vw'} h={'65vh'}  background={'white'} mt={'10'}  mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column"  position={'relative'} alignItems={'center'} cursor={'pointer'}  borderRadius={'10px'}>
        
      
          <Box className='container19' width={'100%'} height={'70%'} >
  
          
          
  
              
  
          </Box>
          <Box textAlign={'center'} width={'6vw'} height={'11vh'}  backgroundColor={'#01B4EC'} position={'absolute'} top={'18vw'} left={'0vw'} borderRadius={'15px'}>
            <Text color={'white'}>
              <span style={{fontSize:"2.5rem",fontWeight:'600'}}>10</span>
<br/>
              <span style={{fontSize:'1.5rem'}}> April 2023</span>
            </Text>
          </Box>

          <Box width={'100%'} height={'30%'} textAlign={'center'} fontSize={'1.5rem'} position={'absolute'} bottom={'-10vh'} >
          Funding Your Dreams: Navigating Financial Aid and Scholarship

          </Box>

          
  
        
  
  
  </Box>

  <Box w={'27vw'} h={'65vh'}  background={'white'} mt={'10'}  mr={'10'} ml={'10'}   boxShadow="0 2px 4px rgba(255, 255, 255, 0.8)" display="flex" flexDirection="column"  position={'relative'} alignItems={'center'} cursor={'pointer'}  borderRadius={'10px'}>
        
      
          <Box className='container20' width={'100%'} height={'70%'} >
  
          
          
  
              
  
          </Box>
          <Box textAlign={'center'} width={'6vw'} height={'11vh'}  backgroundColor={'#01B4EC'} position={'absolute'} top={'18vw'} left={'0vw'} borderRadius={'15px'}>
            <Text color={'white'}>
              <span style={{fontSize:"2.5rem",fontWeight:'600'}}>19</span>
<br/>
              <span style={{fontSize:'1.5rem'}}> June 2023</span>
            </Text>
          </Box>

          <Box width={'100%'} height={'30%'} textAlign={'center'} fontSize={'1.5rem'} position={'absolute'} bottom={'-10vh'} >
          Your Roadmap to Success: The Ultimate College Admissions Guide

          </Box>

          
  
        
  
  
  </Box>



    </HStack>
  


  

</Box>

<Box marginTop={'7vh'} width={'100vw'} height={'95vh'} boxShadow={'7px 2px 2px rgba(0, 0, 0, 0.7)'}>
      <Flex>
        <div >
          <img style={{height:'95vh'}} src={img19}></img>
        </div>

        <VStack style={{margin:'0px auto'}}>
          <h2 style={{fontSize:'2rem'}}>
          <span style={{color:'#000000'}}>CONTACT US </span></h2>
          

          <Text style={{color:'#01B4EC',fontSize:'3.5rem',marginTop:'1vh'}}>Request a Callback</Text>



          <div class="search-bars2">
    <input type="text" className="search-bar2" placeholder="Full Name"></input>
    <input type="text" className="search-bar2" placeholder="Email"></input>
    <input type="text" className="search-bar2" placeholder="Mobile Number"></input>
    <input type="text" className="search-bar3" placeholder="Message"></input>
  </div>

  <Button style={{outline:'none',fontSize:'3.5rem',border: '1px solid #01B4EC',padding: '5px 10px',borderRadius:'12px',marginLeft:'-14vw'}} _hover={{ backgroundColor:'#01B4EC' }}>Submit</Button>

        </VStack>



      </Flex>


    </Box>





































    </div>
  )
}

export default Home