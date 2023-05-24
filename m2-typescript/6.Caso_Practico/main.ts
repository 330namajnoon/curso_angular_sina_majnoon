import { IEvent } from "./event.model";
import { EventService } from "./event.service";

const eventService = new EventService();

// agenda vacía []
console.log(eventService.findAll());

let event1: IEvent = {
    id: -1, // -1 porque es obligatorio y el id se autogenera en save()
    title: "Evento 1 largo de 4 días",
    priority: "BAJA",
    fecha: new Date(),
    description: "Lorem ipsum dolor"
}

console.log(eventService.save(event1));