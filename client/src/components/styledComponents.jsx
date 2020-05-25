import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat';
  font-size: 1.1em;
}
#host {
  margin-left: 150px;
  margin-right: 50px;
  width: auto;
  padding-left: 24px;
}

.flex-container {
  display: flex;
  padding: 0px;
}

.avatar {
  margin-left: 50px;
}
.desc-host-details {
  padding-left: 100px;
  width: 65%;
}
.cohostAv {
  width: 62%;
  margin: auto;
}
`

export const Info = styled.div`
padding-top: 5px;
padding-bottom: 5px;
width: 42%;
padding-right: 100px;
* {
  padding-top: 5px;
  padding-bottom: 5px;
}
`
export const NoteIcon = styled.img`
float: left;
`
export const Cols = styled.div`
display: flex;
`
export const StatsData = styled.div`
padding-right: 30px;
padding-top: 0px;
padding-bottom: 0px;
* {
  padding-right: 5px;
  padding-bottom: 0px;
}
`
export const Top = styled.div`
padding-top: 5px;
padding-bottom: 0px;
display: flex;
`

export const ContactHost = styled.button`
cursor: pointer;
font-size: 16px;
font-weight: 600;
padding-top: 13px;
padding-bottom: 13px;
padding-left: 23px;
padding-right: 23px;
margin-top: 30px;
border-radius: 8px;
border-width: 1px;
background-color: white;
&:hover {
  background: rgb(240,240,240);
}
border-color: rgb(34, 34, 34);

`
export const Bold = styled.div`
font-weight: 600;
padding-top: 5px;
padding-bottom: 4px;

`
export const Avatar = styled.div`
position:relative;
margin-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
`
export const Image = styled.img`
position: relative;
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
`
export const Icon = styled.img`
position: absolute;
width: 30px;
top: 80px;
left: 75px;
`
export const Title = styled.div`
margin-top: 30px;
padding-top: 5px;
padding-bottom: 5px;
`
export const Date = styled.div`
color: rgb(113, 113, 113);
font-weight: 400;
font-size: 16px;
padding-top: 6px;
padding-bottom: 10px;
`
export const Name = styled.h2`
margin: 0px ;
padding: 0px;
`
export const ReadMore = styled.a`
text-decoration: underline;
font-weight: 550;
padding-bottom: 0px;
padding-top: 0px;
cursor: pointer;
`
export const Note = styled.div`
color: rgb(34, 34, 34);
font-weight: 400;
font-size: 13px;
padding-top: 10px;
padding-bottom: 5px;
align-items: center;
width: 50%;
`
export const ContactTextarea = styled.input`
margin-top: 40px;
padding-top: 20px;
padding-bottom: 21px;
width: 45%;
font: 400 13.3333px Arial;
`
export const MessageStyle = styled.div`
margin-top: 100px;
* {
  padding-top: 20px;
  padding-bottom: 10px;
}
`
export const Message = styled.input`
display: block;
margin-top: 30px;
cursor: pointer;
font-size: 16px;
line-height: 24px;
padding-top: 10px;
padding-bottom: 10px;
font-weight: 700;
padding-left: 22px;
padding-right: 22px;
color: rgb(255, 255, 255);
border-radius: 6px;
background: rgb(0, 132, 137);
border-color: transparent;
`

export const ImageSmall = styled.img`
position: relative;
width: 70px;
height: 80px;
border-radius: 50%;
`
export const IconSmall = styled.img`
position: absolute;
width: 20px;
height: 35px;
top: 60px;
left: 55px;
`
