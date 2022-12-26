import Layout from './components/layout'
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
import { useState, useEffect } from 'react';
import { getUser, getRepos } from './services/users'
import { useParams } from 'react-router-dom'
import Modal from './modal';

//hola q tal

function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'lars010'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [modal, setModal] = useState(false)
  const [search, setSearch] = useState('')
  const [pickLanguage, setPickLanguage] = useState('')

  useEffect(() => {
    getUser(username).then(({data, isError}) => {
      if (isError) {
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })
  getRepos(username).then(({data, isError}) => {
    if (isError) {
      console.log('no hemos encontrado los repos de este crack')
      return
    }
    setRepos(data)
  })
}, [username])

  return (
    <Layout>
      <Modal isActive={modal} setModal={setModal} />
      <Profile {...user} />
      <Filters setSearch={setSearch} setPickLanguage={setPickLanguage} repoListCount={repos.length} />
          <RepoList search={search} repoList={repos} pickLanguage={pickLanguage} />
      <Search setModal={setModal} />
    </Layout>
  )

}


export default App;

