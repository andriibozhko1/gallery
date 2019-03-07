import React, { lazy } from 'react';

const AlbumsList = lazy(() => import("../containers/AlbumsList/AlbumsList"));
const PhotoList = lazy(() => import("../containers/PhotoList/PhotoList"));

const routes = [
    {
        path: "/",
        exact: true,
        render: props => <AlbumsList {...props} />
    },
    {
        path: "/albums/:id",
        render: props => <PhotoList {...props} />
    }
];

export default routes;