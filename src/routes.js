import React from 'react';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const About = React.lazy(() => import('./Pages/About/About'));
const Consumables = React.lazy(() => import('./Pages/Consumables/Consumables'));
const Devices = React.lazy(() => import('./Pages/Devices/Devices'));
const SustainableDevelopment = React.lazy(() => import('./Pages/SustainableDevelopment/SustainableDevelopment'));
const Recruitment = React.lazy(() => import('./Pages/Recruitment/Recruitment'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs/ContactUs'));

const routes = [
    { path: '/home', component: Home},
    { path: '/about', component: About},
    { path: '/consumables', component: Consumables},
    { path: '/devices', component: Devices},
    { path: '/development', component: SustainableDevelopment},
    { path: '/recruitment', component: Recruitment},
    { path: '/contact_us', component: ContactUs}
]

export default routes;