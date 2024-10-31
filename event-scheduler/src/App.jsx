/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import CreateEventPage from './Pages/CreateEventPage';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/Navbar';
import PostList from './components/PostList';
import PostPage from './components/PostPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Footer from './components/Footer';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <Router>
            <NavBar toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/event/:id" element={<EventDetailsPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/posts" element={<PostList />} />
                <Route path="/posts/:id" element={<PostPage />} />
                <Route
                    path="/create-event"
                    element={
                        <ProtectedRoute>
                            <CreateEventPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer /> 
        </Router>
    );
}

export default App;
