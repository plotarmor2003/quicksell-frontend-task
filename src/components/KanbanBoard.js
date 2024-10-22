import React, { useState, useEffect } from 'react';
import Navbar from './navbar';  // Import the new Navbar
import Column from './Column';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);

  const normalizeStatus = (status) => status ? status.toLowerCase() : '';

  const getUserById = (userId) => users.find(user => user.id === userId);

  return (
    <>
      <Navbar /> {/* Add the Navbar at the top */}
      <div className="kanban-board">
        <Column title="Backlog" tickets={tickets.filter(ticket => normalizeStatus(ticket.status) === 'backlog')} users={users} getUserById={getUserById} />
        <Column title="To Do" tickets={tickets.filter(ticket => normalizeStatus(ticket.status) === 'todo')} users={users} getUserById={getUserById} />
        <Column title="In Progress" tickets={tickets.filter(ticket => normalizeStatus(ticket.status) === 'in progress')} users={users} getUserById={getUserById} />
        <Column title="Done" tickets={tickets.filter(ticket => normalizeStatus(ticket.status) === 'done')} users={users} getUserById={getUserById} />
        <Column title="Canceled" tickets={tickets.filter(ticket => normalizeStatus(ticket.status) === 'canceled')} users={users} getUserById={getUserById} />
      </div>
    </>
  );
};

export default KanbanBoard;
