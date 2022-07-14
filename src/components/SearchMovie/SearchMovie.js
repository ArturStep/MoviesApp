import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {ImCross} from "react-icons/im";

import s from './SearchMovie.module.css'

const SearchMovie = () => {
  const searchInputRef = useRef(null)
  const navigate = useNavigate()
  const search = (e) => {
    e.preventDefault()
    navigate({
      pathname: '/search',
      search: `?movie=${searchInputRef.current.value}`,
    })
  }
  const [inActive, setInActive] = useState(false)
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
                   ref={searchInputRef}
            />
            <button className={s.btn}
                    type={'submit'}>Search
            </button>
          </form>
        </div> : null
      }
    </div>
  )
}

export default SearchMovie