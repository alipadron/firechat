import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje: string;
  elemento: any;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.elemento = document.getElementById("app-mensajes");
    this.chatService.cargarMensajes().subscribe(() => {
      setTimeout(
        () => (this.elemento.scrollTop = this.elemento.scrollHeight),
        20
      );
    });
  }

  enviarMensaje() {
    if (!this.mensaje) {
      return;
    }
    this.chatService
      .agregarMensaje(this.mensaje)
      .then(() => {
        this.mensaje = null;
      })
      .catch(console.log);
  }
}
