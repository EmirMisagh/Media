import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy, useEffect, useState, useMemo } from 'react';
import Header from '../Header';
import NavbarFootball from '../NavbarFootball';
import Footer from '../Footer';



const Index = lazy(() => import('../../pages/Index'))
const Login = lazy(() => import('../../pages/Login'))
const Sign = lazy(() => import('../../pages/Signin'))
const News = lazy(() => import('../../pages/News'))
const MatchesList = lazy(() => import('../../pages/Football/MatchesList'))
const Match = lazy(() => import('../../pages/Football/Match'))
const League = lazy(() => import('../../pages/Football/League'))
const Team = lazy(() => import('../../pages/Football/Team'))
const IndexPeople = lazy(() => import('../../pages/People/Index'))
const NotFound = lazy(() => import('../../pages/NotFound'))


const routesnavbar = [
    {
        path: "/login",
        element: ''
    },
    {
        path: "/signin",
        element: ''
    },
    {
        path: "/news/:id",
        element: ''
    },
    {
        path: "/football/match/:id",
        element: ''
    },
    {
        path: "/people",
        element: ''
    },
    {
        path: "*",
        element: <Header />
    },
]

const routesnavbarFootball = [
    {
        path: "/login",
        element: ''
    },
    {
        path: "/signin",
        element: ''
    },
    {
        path: "/news/:id",
        element: ''
    },
    {
        path: "/football/match/:id",
        element: ''
    },
    {
        path: "/people",
        element: ''
    },
    {
        path: "/football/league/:id",
        element: <NavbarFootball />
    },
]

const routes = [
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signin",
        element: <Sign />
    },
    {
        path: "/football/matches",
        element: <MatchesList />
    },
    {
        path: "/football/match/:id",
        element: <Match />
    },
    {
        path: "/football/league/:id",
        element: <League />
    },
    {
        path: "/football/team/:id",
        element: <Team />
    },
    {
        path: "/people",
        element: <IndexPeople />
    },
    {
        path: "/news/:id",
        element: <News />
    },
    {
        path: "*",
        element: <NotFound />
    },
]

const routesfooter = [
    {
        path: "/login",
        element: ''
    },
    {
        path: "/signin",
        element: ''
    },
    {
        path: "/news/:id",
        element: ''
    },
    {
        path: "/football/match/:id",
        element: ''
    },
    {
        path: "/people",
        element: ''
    },
    {
        path: "*",
        element: <Footer />
    },
]

export { routesnavbar, routes, routesfooter, routesnavbarFootball };