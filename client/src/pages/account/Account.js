import React from 'react';
import Layout from './../../layouts/Layout';
import AccountMenu from '../../components/Account/AccountMenu';

const Account = ({children, title, description, keywords, author}) => {
  return (
    <>
        <Layout
            title={title}
            description={description}
            keywords={keywords}
            author={author}
        >
            {children}
            <AccountMenu/>
        </Layout>
    </>
  );

    Account.defaultProps = {
        title: 'Your Account - PackaBox',
        description: 'Manage your PackaBox account effortlessly. Explore order history, update preferences, and enjoy personalized shopping experiences. Log in to your PackaBox account to stay connected and discover exclusive offers.',
        keywords: 'PackaBox user account, ecommerce account management, manage PackaBox orders, update user preferences, personalized shopping experiences, PackaBox account benefits, exclusive ecommerce offers, user profile management, secure ecommerce account, PackaBox membership benefits'
    }
};

export default Account;