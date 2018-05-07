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

const PostCreate = (props) =>
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <RadioButtonGroupInput source="status" choices={[
        {id: 'draft', name: 'Draft'},
        {id: 'published', name: 'Published'}
      ]} />
    </SimpleForm>
  </Create>

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} />
    </Admin>
)

ReactDOM.render(<App />, document.getElementById('root'))
