/*
 *
 * HomePage
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
// import pluginId from '../../pluginId';
import { Box } from '@strapi/design-system/Box';
import { nanoid } from "nanoid";
import { Typography } from '@strapi/design-system/Typography';
import { BaseHeaderLayout, ContentLayout, Layout } from '@strapi/design-system/Layout';
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Breadcrumbs, Crumb } from '@strapi/design-system/Breadcrumbs';
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import Illo from '../../components/Illo';
import TodoModal from '../../components/TodoModal';
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";
// import Pokemon from "@awug/pokemon/dist/components/Pokemon";

const HomePage = () => {
  const [todo, setTodo] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  const addTodo = async (data) => {
    console.log(todo);
    setTodo([...todo, {...data, id: nanoid(), isDone: false}])
  }
  const toggleTodo = () => {}
  const deleteTodo = () => {}
  const editTodo = () => {}

  return (
    <Layout>
      <BaseHeaderLayout title="Plug And Play" subtitle={<Breadcrumbs label="folders">
        <Crumb>Root</Crumb>
      </Breadcrumbs>} as="h2" />
      <ContentLayout>
        <Box paddingTop={2} paddingBottom={2} paddingLeft={4}>
          <Typography variant="omega" fontWeight="semiBold">
            Yeah Get lets go
          </Typography>
        </Box>
      </ContentLayout>
      {/*<ContentLayout>*/}
      {/*  <Pokemon />*/}
      {/*</ContentLayout>*/}
      <ContentLayout>
        {
            todo.length === 0 ? (
            <EmptyStateLayout
              icon={<Illo />}
              content="You don't have any todos yet..."
              action={
                <Button
                  onClick={() => setShowModal(true)}
                  variant="secondary"
                  startIcon={<Plus />}
                >
                  Add your first todo
                </Button>
              }
            />
          ) : (
            <>
              <TodoCount count={todo.length} />
              <TodoTable
                todoData={todo}
                setShowModal={setShowModal}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </>
          )
        }
      </ContentLayout>
      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </Layout>
  );
};

export default HomePage;
