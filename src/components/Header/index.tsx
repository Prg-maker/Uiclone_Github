import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/theme';

 import { Container , GithubLogo, SearchForm ,   } from './styles';




interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName)=> void
}


const Header: React.FC<Props> = ({
  setThemeName,
  themeName
}) => {

  const [search , setSearch] = useState('')

  // Navegação com  useNavigat, um hook do React 

  const navigate = useNavigate()


  function handleSubmit(event:React.FormEvent){
    event.preventDefault()


    navigate('/' + search.toLowerCase().trim())
  }


  function toggleTheme(){
    setThemeName(themeName == 'light' ? 'dark' : 'light')
    setThemeName(themeName == 'dark' ? 'light' : 'dark')

  }




  return(
    <Container >
      <GithubLogo
        onClick={toggleTheme}
      />
      <SearchForm onSubmit={handleSubmit}>
        <input 
          placeholder='Enter Username or Repo...'
          value={search}
          onChange={target => setSearch(target.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  )}

export default Header;