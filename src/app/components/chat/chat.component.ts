import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styles: []
})
export class ChatComponent implements OnInit {
  mensaje: string;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.cargarMensajes().subscribe((mensajes: any[]) => {
      console.log(mensajes);
    });
  }

  enviarMensaje() {
    console.log(this.mensaje);
    this.mensaje = null;
  }
}
