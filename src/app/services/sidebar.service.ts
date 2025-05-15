import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  constructor(
    private api: ApiService,

  ) { }

  get() {
    return this.api.get("menu/roberto");
  }

}
