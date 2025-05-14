import { Component, OnInit } from "@angular/core";
import { SidebarService } from "../services/sidebar.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidebar",
  imports: [CommonModule],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
})
export class SidebarComponent implements OnInit {
  menuData: any;
  constructor(private service: SidebarService) { }

  ngOnInit() {
    this.getMenuData();
  }

  getMenuData() {
    this.service.get().subscribe({
      next: (response) => {
        // Processa a resposta da API
        this.menuData = response.sessions;
        console.log(this.menuData);
      },
      error: (error) => {
        // Lida com erros da API
        console.error("Erro ao chamar a API:", error);
      },
      complete: () => {
        // Executa algo quando a chamada é concluída
        console.log("Chamada à API concluída.");
      },
    });
  }
}
