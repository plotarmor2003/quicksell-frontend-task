import React from 'react';
import TicketCard from './TicketCard';

const Column = ({ title, tickets, getUserById, users }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map((ticket) => {
        const user = getUserById(ticket.userId); // Get the user based on the ticket's userId
        return <TicketCard key={ticket.id} ticket={ticket} user={user} users={users} />;
      })}
    </div>
  );
};

export default Column;
