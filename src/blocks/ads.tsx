import styled from "styled-components"
import CardProps from "../reuseables/CardProps"

const ads = () => {
  return (
    <div>
    <Container>
        <Wrapper>
           <Title>
             {/* <Word> Top Education offers and deals are listed here</Word> */}
             <div className="text-3xl sm:text-4xl font-[600] flex items-center w-4/5 h-10 md:h-14">
             Top Education offers and deals are listed here
    </div>
             <div
        className="w-24 transition-all hover:shadow-red-300 hover:shadow-xl cursor-pointer text-lg font-normal h-12 flex justify-center items-center text-white bg-[#e96269] rounded">
        View All
      </div>
           </Title>
           <Box>
            <CardProps/>
   
           </Box>
        </Wrapper>
    </Container>
    </div>
  )
}

export default ads

const Box = styled.div`
/* background-color: purple; */
height: 400px;
width: 100%;
margin-top: 20px;
display: flex;
align-items: center;
/* justify-content: center; */
flex-wrap: wrap;
`
  

const Title = styled.div`
display: flex;
align-items: center;
margin-top: 40px;
/* background-color: purple; */
display: flex;
align-items: center;
justify-content: space-between;
`
const Wrapper = styled.div`
width: 97%;
height: 90%;
/* background-color: yellow; */
`

const Container = styled.div`
background-color: #EFEFF6;
height: 500px;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`