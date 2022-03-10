import React from 'react';

import { Container, Main , LeftSide, RightSide,  } from './styles';

import PofileData from '../../components/ProfileData'


const Profile: React.FC = () => {
  return(
    <Container >
      <Main>
        <LeftSide>
          <PofileData
            username= 'DanielFernades'
            name="Daniel Ferndens"
            avatarUrl = "https://github.com/Prg-Maker.png"
            followers={400}
            following={40}
            company = "daniel"
            location = "DF, Brazil"
            email="daniel.fernandes.professional@gmail.com"
            blog={undefined}

          />
        </LeftSide>
        <RightSide>

        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile;