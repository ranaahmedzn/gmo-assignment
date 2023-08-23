import React from 'react';
import './SecondPage.css'
import AllPosts from '../../components/AllPosts';
import DepartmentsDropdown from '../../components/DepartmentsDropdown';

const SecondPage: React.FC = () => {

  return (
    <div className="parent-div">
      <AllPosts />
      <DepartmentsDropdown />
    </div>
  );
};


export default SecondPage;