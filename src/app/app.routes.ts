import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { TrakingComponent } from './pages/traking/traking.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { CustomersComponent } from './pages/customers/customers.component';

export const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "marketplace", component: MarketplaceComponent },
  { path: "orders", component: OrdersComponent },
  { path: "traking", component: TrakingComponent },
  { path: "customers", component: CustomersComponent },
  { path: "discounts", component: DiscountsComponent },
];
