import { ThemeProvider } from 'styled-components';
import Layout from './components/layout'
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import { useState, useEffect } from 'react';
import { getUser, getRepos } from './services/users'
import { useParams } from 'react-router-dom'
import Modal from './modal';
import Switch from './components/switch';


// export const ThemeContext = createContext(null);
// const GlobalTheme = styled(GlobalStylesStyled)`
// background-color: ${(props) => props.theme.body};
// color: ${(props) => props.theme.color};
// `

// const LayoutTheme = styled(Layout)`

// `
const darkTheme = {
  body: "var(--bg)",
  title: "#fff",
  subtitle: "#b6b6b6",
  color: "var(--grey)"
};

const lightTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  color: "var(--bg)",
};

function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'lars010'
  }
  const [theme, setTheme] = useState('dark')
  const isLightTheme = theme === "light";
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [pickLanguage, setPickLanguage] = useState('')

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
    console.log(theme);
    // console.log(isLightTheme ? lightTheme : darkTheme);
  };
  


  useEffect(() => {
    getUser(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })
    getRepos(username).then(({ data, isError }) => {
      if (isError) {
        console.log('no hemos encontrado los repos de este crack')
        return
      }
      setRepos(data)
    })
  }, [username])

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme } >
      <Layout >
        <Modal isActive={modal} setModal={setModal} />
        <Profile {...user} />
        <Filters setSearch={setSearch} setPickLanguage={setPickLanguage} repoListCount={repos.length} />
        <RepoList search={search} repoList={repos} pickLanguage={pickLanguage} />
        <Search setModal={setModal} />
        <Switch toggleTheme={toggleTheme} isLightTheme={isLightTheme} />
      </Layout>
      </ThemeProvider>
  )

}


export default App;

