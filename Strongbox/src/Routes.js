import AppCarousel from './components/authentication/AppCarousel';
import LoginPage from './components/authentication/LoginPage';
import SignUpPage from './components/authentication/SignUpPage';

export const ROUTES = [
    { path: '/', component: AppCarousel },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage }
];