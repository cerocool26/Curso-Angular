import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  btnDisable = true;
  porcentaje = 0;
  img = "https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png";

  toggleButton (){
    this.btnDisable = !this.btnDisable;
  }

  incrementPorcentaje(){
    this.porcentaje += 1;
  }

  onScroll(event: Event){
    const element  = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  keyUp(event: Event){
    const element = event.target as HTMLInputElement;
    console.log(element.value)

  }
}
