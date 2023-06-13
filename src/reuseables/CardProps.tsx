import styled from "styled-components"

const CardProps = () => {
  return (
    <div>
        <Container>
            <Title>
                <Sub>
                    Productivity Course 
                </Sub>
                <Major>
                    Get 12-Month <br /> Subscription
                </Major>
            </Title>
        </Container>
    </div>
  )
}

export default CardProps
const Major = styled.div``

const Sub = styled.div``

const Title = styled.div``


const Container = styled.div`
background-color: whitesmoke;
height: 300px;
width: 400px;
margin: 10px;
`
