import React , {useEffect, useState}from 'react';

import { Container, Main , LeftSide, RightSide,  Repos , CalendarHeading , RepoIcon , Tab } from './styles';

import PofileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard';

import {useParams} from 'react-router-dom'


import RadmonCalendar from '../../components/RadmonCalendar'
import { APIREPO, APIUSER } from '../../@types';

interface Data {
  user?: APIUSER;
  repos?: APIREPO[];
  error?: string
}


const Profile: React.FC = () => {

  const {username = "Prg-Maker"} = useParams()

  const [data, setData] = useState<Data>()


  useEffect(()=> {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`)




    ]).then(async (responses) => {

      const [userReponse , reposResponse] = responses

      if(userReponse.status == 404){
        setData({error: 'User not found'})
        
        return;
      }

      const user = await userReponse.json()
      const repos = await reposResponse.json()
      

      const  shuffleRepos = repos.sort(()=> 0.50 - Math.random())
      const slicedRepos = shuffleRepos.slice(0 , 6)
      
      setData({
        user,
        repos: slicedRepos
      })

    })
  } , [username])


  if(data?.error){
    return <h1>{data.error}</h1>
  }

  if(!data?.user || !data?.repos ){
    return <h1>Lodding...</h1>
  }

  const TabContent = () => {
    return(
      <div className='content'>

        <RepoIcon/>

        <span className='label'>Repositories</span>
        <span className='number'>{data?.user?.public_repos}</span>

      </div>

    )
  }

  return(
    <Container >
      <Tab className='desktop'>

        <div className="wrapper">
          <span className="offset" />
          <TabContent />

        </div>
        <span className='line'></span>
       
      </Tab>

      <Main>
        <LeftSide>
          <PofileData
            username= {data?.user?.login}
            name={data?.user?.name}
            avatarUrl = {data?.user?.avatar_url}
            followers={data?.user?.followers}
            following={data?.user?.following}
            company = {data?.user?.company}
            location = {data?.user?.location}
            email={data?.user?.email}
            blog={data?.user?.blog}

          />
        </LeftSide>
        <RightSide>



          <Repos>
            <Tab className="mobile">
                <TabContent/>
                <span className='line'></span>
            </Tab>

            <h2>Random repos</h2>

            <div>
              {data?.repos?.map( (item) => {
                return(
                  <RepoCard
                    key={item.name}
                    username= {item.owner.login}
                    reponame={item.name}
                    description= {item.description}
                    language={item.language}
                    stars={item.stargazers_count}
                    forks = {item.forks}
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