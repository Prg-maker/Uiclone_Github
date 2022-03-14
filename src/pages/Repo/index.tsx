import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIREPO } from '../../@types';

import { 
  Container,
  Breadcrum,
  RepoIcon,
  Stars,
  StartIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,

} from './styles';


interface Data {
  repo?: APIREPO;
  error?: string
}


const Repo: React.FC = () => {

  const {username , reponame } = useParams()

  const [data ,setData] = useState<Data>()


  useEffect(()=> {

    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async (response)=> {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repo: await response.json() }
        )


      }
    )
    
  } , [reponame , username])


  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Breadcrum>
        <RepoIcon/>
        <Link  to={'/Daniels'} className={'username'} >
          {username}/ 
        </Link>


        <span></span>


        <Link to={"/daniel/youtube-clone"} className={'reponame'}>
        {reponame}
        </Link>

      </Breadcrum>

      <p>{data.repo.description}</p>


      <Stars>

        <li>
          <StartIcon/>
          <b>{data.repo.stargazers_count}</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon/>
          <b>{data.repo.forks}</b>
          <span>Forkss</span>
        </li>


      </Stars>


      <LinkButton href={data.repo.html_url}>

        <GithubIcon/>

        <span>View on Github</span>
      
      </LinkButton>


      

    </Container>
  )
}

export default Repo;