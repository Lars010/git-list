import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
 grid-area: repo-list;
 display: flex;
 flex-direction: column;
 gap: 2rem;
 /* background-color: orange; */
`

function RepoList({ repoList, search, pickLanguage }) {

    let list = repoList
    if (search !== '') {
        list = list.filter((item) => {
            return item.name.toUpperCase().search(search.toUpperCase()) >= 0
        })
    }
    
    if (pickLanguage && pickLanguage !== '' && pickLanguage !== 'all') {
        list = list.filter((item) => {
            if (item.language) {
                return item.language.toUpperCase() === pickLanguage.toUpperCase();
            }
        })
    }


    return (
        <RepoListStyled>
            {list.map((item) => {
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
