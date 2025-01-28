import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import { Bio } from '../../data/information';
import Typewriter from 'typewriter-effect'
import Sathwik2 from "./Sathwik.jpg"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import StyledStarsCanvas from '../canvas/Stars';
import HeroBgAnimation from './Bg';
import { headContainerAnimation,
  headContentAnimation,
  headTextAnimation,} from '../../utils/motion';




const HeroContainer=styled.div`
background-color:${({theme})=>theme.card_light};
display:flex;
align-items:center;
justify-content:center;
position:relative;
padding:80px 30px;

@media screen and (max-width:960px)
{
  padding:66px 16px;
}

@media screen and (max-width:640px)
{
  padding:32px 16px;
}
z-index:1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);

`;

const HeroBg=styled.div`
position:absolute;
display:flex;
justify-content:end;
top:50%;
right:0;
bottom:0;
left:50%;
overflow:hidden;
width:100%;
height:100%;
padding:0 30px;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media (max-width: 960px) {
  justify-content: center;
  padding: 0 0px;
}

`;

const HeroInnerContainer=styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
max-width:1100px;

@media (max-width: 960px) {
  flex-direction:column;
}
`;

 const HeroLeftContainer=styled.div`
 width:100%;
 order:1;
 @media (max-width: 960px) {
  order:2;
  margin-bottom:32px;
  display:flex;
  align-items:center;
  flex-direction:column;
   

}
@media (max-width: 640px) {
  order:2;
  margin-bottom:32px;
  display:flex;
  align-items:center;
  flex-direction:column; 
}


 
 `;

 const  HeroRightContainer=styled.div`
 width:100%;
 order:2;
 display:flex;
 justify-content:end;
 gap:12px;
 @media (max-width: 960px) {
  order:1;
  margin-bottom:80px;
  justify-content:center;
  align-items:center;

}
@media (max-width: 960px) {
  order:1;
  margin-bottom:30px;
  justify-content:center;
  align-items:center;
} `;


const Tittle=styled.div`
font-size:50px;
font-weight:700;
line-height:70px;
color:${({theme})=>theme.text_primary};
@media (max-width: 960px) {
 text-align:center;
}

@media (max-width: 640px) {
  line-height:50px;
  font-size:40px;
  margin-bottom:8px;

}

`;


const TextLoop=styled.div`
font-size:32px;
font-weight:600px;
color:${({theme})=>theme.text_primary};
line-height:70px;
display:flex;
gap:12px;
@media (max-width: 960px) {
  text-align:center;
 }
 @media (max-width: 640px) {
  line-height:50px;
  font-size:22px;
  margin-bottom:16px;

}
`;

const Span=styled.span`
color: ${({ theme }) => theme.primary};
cursor:pointer;

`;

const SubTittle=styled.div`
font-size:20px;
font-weight:400;
color:${({theme})=>theme.text_primary+99};
line-height:32px;
margin-bottom:42px;
@media (max-width: 960px) {
  text-align:center;
 }
 @media (max-width: 640px) {
  line-height:32px;
  font-size:16px;


}
`;

const ResumeButton=styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;

width: 95%;
max-width: 300px;
text-align: center;
padding: 16px 0;
margin: auto;



background: hsla(271, 100%, 50%, 1);
background: linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -moz-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -webkit-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
border-radius: 50px;
font-weight: 600;
font-size: 20px;

   &:hover {
      transform: scale(1.05);
  transition: all 0.4s ease-in-out;
  background: #000;
  box-shadow:  20px 20px 60px #1F2634;
  filter: brightness(1);
  }    
  
  
  @media (max-width: 640px) {
      padding: 12px 0;
      font-size: 18px;
  } 
  color: white

`;


const Image1 = styled.img`
  width: 40%;
  height: 80px;
  margin-left: 100px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;




const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  margin-left:40px ;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const About= styled.div`
display: flex;
flex-direction: column;
width: 100%;
  
`;









const  Hero=() =>{
  const navigate=useNavigate();
  return (
    <About id='About'>
      <HeroContainer>
      <HeroBg>
          <StyledStarsCanvas/>
          <HeroBgAnimation />
        </HeroBg>
       

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Tittle>
                  Hi, I am <br /> {Bio.name}
                </Tittle>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                    
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTittle>{Bio.description}</SubTittle>
              </motion.div>

              
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Image src={Sathwik2} alt="Sathwik Aerra" />
                  <Image1 src="https://signature.freefire-name.com/img.php?f=10&t=Sathwik" />
                </Tilt>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
      <ResumeButton  href={Bio.resume}
                            target="_Blank">
                Check Resume
              </ResumeButton> 
    </About>
  );
};

export default Hero
