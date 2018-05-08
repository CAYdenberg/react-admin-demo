/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom'
import { Admin, Resource, List, Datagrid, TextField, Create, SimpleForm, TextInput, RadioButtonGroupInput } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider({
    posts: [
        { id: 0, title: 'Hello, world!', status: 'draft' },
        { id: 1, title: 'FooBar', status: 'draft' },
    ],
    comments: [
        { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
        { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
    ],
})

const PostList = (props) =>
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
      </Datagrid>
    </List>

const authProvider = () => Promise.resolve()

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} authProvider={authProvider} />
    </Admin>
)

ReactDOM.render(<App />, document.getElementById('root'))
