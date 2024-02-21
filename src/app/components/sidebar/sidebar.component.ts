import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'fa fa-dashboard' },
  { path: '/employee', title: 'Employee Form', icon: 'fa fa-user' },
  { path: '/viewresources', title: 'View Resources ', icon: 'fa fa-eye cursor-pointer' },
  { path: '/onboarding', title: 'Initiate onboarding', icon: 'fa fa-hourglass-start' },
  { path: '/bgv', title: 'Initiate BGV ', icon: 'fa fa-exclamation-circle' },

  { path: '/complete-onboarding', title: 'Complete Onboarding', icon: 'fa fa-handshake-o' },
  { path: '/admin-dashboard', title: 'Admin Console', icon: 'fa fa-user' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.menuItems.push(ROUTES[0]);
    }
    else {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

  }

  logOut() {
    localStorage.clear();
    // this.authService.removeToken();
    this.router.navigateByUrl('');
  }
}
