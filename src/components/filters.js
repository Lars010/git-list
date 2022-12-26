import styled from 'styled-components'
import Icon from './icon'
import InputText from './imput-text'
import Selector from './selector'
import Separator from './separator'


const FiltersStyled = styled.div`
 grid-area: filters;
 .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
 }
 .action-list {
   display: flex;
   gap: 1rem;
 }
 .select-list {
   display: flex;
   gap: .5rem;
 }
`

function Filters({ repoListCount, setSearch}) {
    function handleChange(event) {
     setSearch(event.target.value)
    }
    return (
        <FiltersStyled>
        <h3 className='count'>
            repositorios{repoListCount}
        </h3>
        <div className='action-list'>
            <InputText 
            placeholder='Busca un repositorio'
            type='search'
            onChange={handleChange}
            />
            <div className='select-list'>
            <Selector>
                <option value='all' disabled>all</option>
                <option value='forks'>forks</option>
            </Selector>
            <Selector>
                <option value='language' disabled>Languages</option>
                <option value='html'>Html</option>
                <option value='css'>CSS</option>
                <option value='JavaScript'>JavaScript</option>
            </Selector>
            <Selector>
                <option value='sort' disabled>Sort</option>
                <option value='forks'>Stars</option>
            </Selector>
            </div>
        </div>
        <Separator />
        </FiltersStyled>
    )
}

export default Filters
