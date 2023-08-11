import './Journal.css';
import Entry from '../Entry/Entry'
import UserContext from '../UserContext/UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Journal = () => {
  const {currentUser, isUserLoggedIn} = useContext(UserContext)
  const { journal } = currentUser
  const navigate = useNavigate()

  useEffect(() => {
    !isUserLoggedIn && navigate('/')
  }, [])

  return (
    <>
      <h2 className='sub-title'>My Journal</h2>
      <div className='journal'>
        {journal.length ?
        journal.sort((a, b) => new Date(b.date) - new Date(a.date)).map(entry => <Entry key={entry.id} {...entry}/>)
        : <p className='no-entries'>Search an album to add to your journal</p>}
      </div>
    </>
  )

};

export default Journal;