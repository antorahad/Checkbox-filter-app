import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Content from './Content';

const Layout = () => {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState('all'); // State to hold the filter value

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('./courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleCheckboxChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter === filter ? 'all' : selectedFilter); // Toggle the filter value

    // You can also remove this line if you want 'all' to be selected by default when no checkbox is selected
    // setFilter(e.target.checked ? e.target.value : 'all');
  };

  // Filter the courses based on the selected filter value
  const filteredCourses = courses.filter((course) => {
    if (filter === 'all') return true; // Show all courses

    // Filter by price based on the selected checkbox value ('paid' or 'free')
    if (filter === 'free') {
      return course.price === 'free'; // Filter free courses
    } else if (filter === 'paid') {
      return course.price !== 'free'; // Filter paid courses
    }

    return false; // For any other case, return false to filter out
  });

  return (
    <div className='min-h-screen flex flex-col items-start justify-start gap-5 p-5'>
      <h1 className='text-5xl font-bold'>Checkbox Filter Method</h1>
      {/* Pass handleCheckboxChange function and selected filter value to the Filter component */}
      <Filter handleCheckboxChange={handleCheckboxChange} selectedFilter={filter} />
      <div className='grid grid-cols-1 gap-5'>
        {filteredCourses.map((item) => (
          <Content key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
