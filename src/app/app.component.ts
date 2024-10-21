import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from "./navegacao/home/home.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'MeuProjeto';
}
