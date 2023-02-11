import './search.scss'
import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
    return (
        <div className='search'>
            <form className='search__form'>
                <input className='search__form-input' type='text' name='text' placeholder='Поиск по каталогу' />
                <div>
                    <AiOutlineSearch color='grey' />
                </div>
            </form>
        </div>
    )
}

export default Search