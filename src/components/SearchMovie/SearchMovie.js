import React, {useState} from 'react';
import s from './SearchMovie.module.css'
import {FaSearch} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {useDispatch} from "react-redux";
import {getSearchMovie} from "../../store/actions/movies";

const SearchMovie = () => {
    const dispatch = useDispatch();
    const onClickGetSearchKey = (searchKey) => {
        dispatch(getSearchMovie(searchKey))
        console.log(searchKey)
    }
    const search = (e) => {
        e.preventDefault()
        onClickGetSearchKey(searchKey)
    }
    const [inActive, setInActive] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    return (
        <div className={s.search}>
            <div>
                {!inActive ?
                    <FaSearch className={s.open_btn} onClick={() => setInActive(true)}/> : null
                }
            </div>
            {inActive ?
                <div className={s.input_active}>
                    <div>
                        <ImCross className={s.close_btn} onClick={() => setInActive(false)}/>
                    </div>
                    <form onSubmit={search}>
                        <input className={s.input}
                               autoFocus={true}
                               type='text'
                               onChange={(e) => setSearchKey(e.target.value)} />
                        <button className={s.btn}
                                type={'submit'}>Search</button>
                    </form>
                </div> : null
            }
        </div>
    )
}

export default SearchMovie