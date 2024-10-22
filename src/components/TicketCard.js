import React from 'react';

// Function to extract initials from the user's name
const getInitials = (name) => {
  if (!name) return '';
  const nameParts = name.split(' ');
  const initials = nameParts.map(part => part[0].toUpperCase()).join('');
  return initials;
};

// Predefined color palette
const colors = [
    '#FF6B6B', // Bright Red
    '#FFE66D', // Bright Yellow
    '#6BCB77', // Bright Green
    '#4D96FF', // Bright Blue
    '#FFB3C1', // Bright Pink
    '#F7D716', // Lemon Yellow
    '#FF9F1C', // Vivid Orange
    '#A56CC1', // Vibrant Purple
    '#FFCC29', // Golden Yellow
    '#2EC4B6'  // Aqua Teal
  ];
  
    

// Function to assign a color from the color palette based on user ID
const getColorForUser = (userId, users) => {
  if (!userId || !users.length) return '#ccc'; // Fallback color if userId or users are missing

  // Find the index of the user by userId
  const userIndex = users.findIndex(user => user.id === userId);

  // Ensure the index is within the bounds of the color palette
  const colorIndex = userIndex % colors.length;

  return colors[colorIndex]; // Return the color corresponding to the user index
};

const TicketCard = ({ ticket, user, users }) => {
  // Get the initials for the user
  const initials = getInitials(user?.name);

  // Get the unique background color based on user ID and the user list
  const backgroundColor = getColorForUser(user?.id, users);

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {/* Apply unique color as background */}
        <div className="user-initials" style={{ backgroundColor }}>
          {initials}
        </div>
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-tag">
        <span className="tag-text">{ticket.tag.join(', ')}</span>
      </div>
    </div>
  );
};

export default TicketCard;
