import React from 'react'

import { Box, background, position } from '@chakra-ui/react';
import { HStack, Flex, Icon,Divider,Button,Heading,VStack,Text } from '@chakra-ui/react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGlobe } from 'react-icons/fa';

import './Footer.css'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <div style={{backgroundColor:"#0039A8"}}>
        
        <Box className='fend' width={'100vw'} height={'70vh'} color={'white'}>
            <Box  width={'80vw'} height={'35vh'}>
            <HStack  marginTop={'7vh'}>
            <Box width={'11vw'} marginRight={'5vw'} >
                <VStack >
                    <Text style={{fontSize:'1.5rem',fontWeight:'600'}}>Top Courses</Text>
                    
                    <Text fontSize={'1.2rem'} marginTop={'2vh'} color={'rgba(256,256,256,0.7)'}>MD in India</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>MS in India</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>DM in India</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>MCH in India</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>DIP in India</Text>

                
                </VStack>

            </Box>


            <Box width={'11vw'} marginRight={'5vw'} marginTop={'4vh'}>
                <VStack >
                    <Text style={{fontSize:'1.5rem',fontWeight:'600'}}>Top States</Text>
                    
                    
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'} marginTop={'2vh'}>Karnataka</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Kerala</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Uttar Pradesh</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Rajasthan</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>West Bengal</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Pondicherry</Text>

                
                </VStack>

            </Box>




            <Box width={'11vw'} marginRight={'5vw'} marginTop={'9vh'}>
                <VStack >
                    
                    
                    
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Maharashtra</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Uttarakhand</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Chandigarh</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Bihar</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Delhi</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Gujarat</Text>

                
                </VStack>

            </Box>




            <Box width={'11vw'} marginRight={'5vw'}>
                <VStack >
                    <Text style={{fontSize:'1.5rem',fontWeight:'600'}}>Legal</Text>
                    
                    <Text fontSize={'1.2rem'} marginTop={'2vh'} color={'rgba(256,256,256,0.7)'}>About Us</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Blog</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Contact Us</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Terms & Condition</Text>
                    <Text fontSize={'1.2rem'} color={'rgba(256,256,256,0.7)'}>Privacy Policy</Text>

                
                </VStack>

            </Box>




            <Box width={'11vw'} marginRight={'5vw'}  textAlign={'start'}>
                <VStack >
                    <Text style={{fontSize:'1.5rem',fontWeight:'600'}}  marginTop={'4vh'} >Office Location</Text>


                    <Text style={{fontSize:'1.2rem',fontWeight:'600'}} marginTop={'2vh'}>Delhi</Text>
                    
                    <Text fontSize={'1.2rem'} marginTop={'1.2vh'} color={'rgba(256,256,256,0.7)'}>3A/2 xyz xyz
                    <br/>
                    789234 abd fgrfg</Text>


                    
                    

                
                </VStack>

            </Box>




            

            
        </HStack>
        <Box width={'11vw'} marginLeft={'5vw'} marginTop={'20vh'}>
                <HStack>
                    <Box>
                    <Text style={{fontSize:'1.2rem',fontWeight:"600"}}>Follow us on</Text>

                    <div className="social-icons" style={{marginTop:"1.5vh"}}>
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
        <FaFacebook className="icon" />
        <FaYoutube className="icon" />
      </div>
                    

                    </Box>
                    
                    
                    <Flex>
                    <FiPhoneCall  size={30} color="white" style={{ marginLeft: '3.5vw' ,paddingTop:'9px',marginRight:"1vw"}} />
                    <Text fontSize={'1.625rem'}  color={'white'}>+91xxxxxxxx
                   
                    </Text>
                    </Flex>
                    <Flex>
                    <HiOutlineMail  size={34} color="white" style={{ marginLeft: '3.5vw' ,paddingTop:'9px',marginRight:"0.7vw"}} />
                    <Text fontSize={'1.625rem'} color={'white'} marginTop={'0.4rem'}>info@gmail.com
                    </Text>
                    </Flex>
                    <Flex>
                    <FaGlobe  size={30} color="white" style={{ marginLeft: '3.5vw' ,paddingTop:'9px',marginRight:"0.7vw"}} />
                    <Text fontSize={'1.625rem'} color={'white'} marginTop={'0.4rem'}>www.website.com
                    </Text>

                    
                    </Flex>
                    

                
                </HStack>

            </Box>

           
            </Box>
        

        </Box>

        


    </div>
    
  )
}

export default Footer