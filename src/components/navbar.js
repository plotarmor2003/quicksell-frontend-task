import React, { useState } from 'react';

const Navbar = () => {
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrdering(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="dropdown-container">
        <button className="display-button" onClick={toggleDropdown}>
          Display ▼
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <label htmlFor="grouping-dropdown">Grouping</label>
              <select
                id="grouping-dropdown"
                value={grouping}
                onChange={handleGroupingChange}
                className="dropdown-select"
              >
                <option value="Status">Status</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="dropdown-item">
              <label htmlFor="ordering-dropdown">Ordering</label>
              <select
                id="ordering-dropdown"
                value={ordering}
                onChange={handleOrderingChange}
                className="dropdown-select"
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
