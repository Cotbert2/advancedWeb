import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/views/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/views/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'skills',
        loadComponent: () => import('./components/views/skills/skills.component').then(m => m.SkillsComponent)
    }, 
    {
        path: 'projects',
        loadComponent: () => import('./components/views/projects/projects.component').then(m => m.ProjectsComponent)
    }
];
