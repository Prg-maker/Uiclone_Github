import React from 'react';
import { Link } from 'react-router-dom';

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

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrum>
        <RepoIcon/>
        <Link  to={'/Daniels'} className={'username'} >
          daniel
        </Link>


        <span></span>


        <Link to={"/daniel/youtube-clone"} className={'reponame'}>
          youtube-clone
        </Link>

      </Breadcrum>

      <p>Contains all of my Youtube lessons  code.</p>


      <Stars>

        <li>
          <StartIcon/>
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon/>
          <b>0</b>
          <span>Forkss</span>
        </li>


      </Stars>


      <LinkButton href={'https://github.com/Prg-maker?tab=repositories'}>

        <GithubIcon/>

        <span>View on Github</span>
      
      </LinkButton>


      

    </Container>
  )
}

export default Repo;