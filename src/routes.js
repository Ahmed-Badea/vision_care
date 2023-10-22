import React from 'react';

const Home = React.lazy(() => import('./Pages/Home/Home'));
const About = React.lazy(() => import('./Pages/About/About'));
const WorkScope = React.lazy(() => import('./Pages/WorkScope/WorkScope'));
const SustainableDevelopment = React.lazy(() => import('./Pages/SustainableDevelopment/SustainableDevelopment'));
const MediaCenter = React.lazy(() => import('./Pages/MediaCenter/MediaCenter'));
const InvestorRelations = React.lazy(() => import('./Pages/InvestorRelations/InvestorRelations'));
const Ipo = React.lazy(() => import('./Pages/Ipo/Ipo'));
const Recruitment = React.lazy(() => import('./Pages/Recruitment/Recruitment'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs/ContactUs'));

const routes = [
    { path: '/home', component: Home},
    { path: '/about', component: About},
    { path: '/work_scope', component: WorkScope},
    { path: '/development', component: SustainableDevelopment},
    { path: '/media_center', component: MediaCenter},
    { path: '/relations', component: InvestorRelations},
    { path: '/ipo', component: Ipo},
    { path: '/recruitment', component: Recruitment},
    { path: '/contact_us', component: ContactUs}
]

export default routes;