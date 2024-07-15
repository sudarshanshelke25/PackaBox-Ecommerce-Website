import React from 'react';
import Layout from './../../layouts/Layout';
import AdminMenu from '../../components/Admin/AdminMenu';
import './admin.css';

const Admin = ({children, title, description, keywords, author}) => {
  return (
    <>
        <Layout
            title={title}
            description={description}
            keywords={keywords}
            author={author}
        >
            {children}
            <AdminMenu/>
        </Layout>
    </>
  );

    Admin.defaultProps = {
        title: 'Your Account - PackaBox',
        description: 'Efficiently manage your PackaBox e-commerce platform with our comprehensive admin panel. Oversee user accounts, process orders, manage inventory, and analyze sales data seamlessly. Experience streamlined operations and enhanced control with PackaBox admin features.',
        keywords: 'PackaBox admin panel, E-commerce admin tools, Manage PackaBox orders, Inventory management system,User account management, Sales analysis tools, Admin dashboard features, PackaBox admin login, Admin privileges in e-commerce,E-commerce backend management'
    }
};

export default Admin;