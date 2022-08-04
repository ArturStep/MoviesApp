import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {v4} from "uuid";

import MoviesList from '../MoviesList/MoviesList';

const routes = [

  {
    path: '/popular',
    exact: true,
    component: MoviesList,
  },
  {
    path: '/top_rated',
    exact: true,
    component: MoviesList,
  },
  {
    path: '/upcoming',
    exact: true,
    component: MoviesList,
  },
  {
    path: '/genre/:genreId',
    exact: true,
    component: MoviesList,
  },
  {
    path: '/search',
    exact: true,
    component: MoviesList,
  }
];

const AppRoutes = (props) => (
  <Routes>
    <Route
      path="/"
      element={<Navigate to="/popular" replace/>}/>
      {routes.map(({component: Component, ...route}) => (
        <Route
          key={v4()}
          {...route}
          element={<Component {...props}/>}
        />
      ))}
  </Routes>
);

export default AppRoutes;
