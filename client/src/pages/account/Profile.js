import React from 'react'
import Account from './Account';

const Profile = () => {
  return (
    <Account
        title='Your Profile - PackaBox'
    >
        <section className='section-container profile-container'>
            <div className='section-header'>
                profile
            </div>
        </section>
    </Account>
  );
};

export default Profile;