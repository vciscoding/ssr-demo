import React from 'react';
import { renderToString } from 'react-dom/server';
import { ToDoItem } from '../src/ToDoItem/';
import app from './app';
import { fetchData } from '../mock';
import { ToDoList } from '../src/ToDoLIst';

app.get('/', async (req, res) => {
    const result = await fetchData()
    const toDoItemString = renderToString(<ToDoList defaultToDoList={result} />);
    res.send(`
        <html>
            <head>
                <title>hello world</title>
            </head>
            <style type='text/css'>
                li {
                   list-style: none;
                   border-bottom: 1px solid #f5f5f5;
                   font-size: 12px;
                   padding: 5px 0;
                   height: 28px;
                }
                button {
                    display: flex;
                    align-items: center;
                    background: #f5f5f5;
                    padding: 2px 5px;
                    margin-top: 20px;
                }
                button svg {
                    margin-right: 2px;
                }
            </style>
            <body>
                <div id='root'>${toDoItemString}</div>
                <script>window.data=${JSON.stringify(result)}</script>
                <script src='/index.js'></script>
            </body>
        </html>
    `)
})
