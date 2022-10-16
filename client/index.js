import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { ToDoList } from '../src/ToDoList';

const defaultToDoList = window.data
hydrateRoot(document.getElementById('root'), <ToDoList defaultToDoList={defaultToDoList} />);