import React from 'react';

import { Container, Main , LeftSide, RightSide,  Repos , CalendarHeading } from './styles';

import PofileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard';


import RadmonCalendar from '../../components/RadmonCalendar'

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

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[ 1 , 2 , 3 , 4 , 5 , 6].map(n => {
                return(
                  <RepoCard
                    key={n}
                    username= {'danielSilva'}
                    reponame={'youtube-content'}
                    description= {'Contains all of my Youtube lesson code'}
                    language={n % 3 == 0 ? "Javascript": "Typescript"}
                    stars={0}
                    forks = {0}
                  />
                )
              })}
            </div>

          </Repos>
              
              <CalendarHeading>
                Random calendar do not represent actual data
              </CalendarHeading>


              <RadmonCalendar/>


        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile;