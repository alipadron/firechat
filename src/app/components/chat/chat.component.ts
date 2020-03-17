import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje: string;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.cargarMensajes().subscribe();
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
