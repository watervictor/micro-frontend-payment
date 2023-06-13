import styled from "styled-components"

const ads = () => {
  return (
    <div>
    <Container>
        <Wrapper>
           <Title>
              Top Education offers and deals are listed here
           </Title>
        </Wrapper>
    </Container>
    </div>
  )
}

export default ads

const Title = styled.div`
font-weight: 500;
display: flex;
align-items: center;
margin-top: 40px;
`
const Wrapper = styled.div`
width: 90%;
height: 90%;
background-color: yellow;
`

const Container = styled.div`
background-color: red;
height: 500px;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`