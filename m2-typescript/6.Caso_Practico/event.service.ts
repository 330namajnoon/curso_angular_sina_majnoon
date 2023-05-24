// Opcional: convertir EventService en una interfaz
// y hacer dos clases que la implementen
// una clase hace las operaciones con un Array

import { IEvent } from "./event.model";

// otra clase hace las operaciones con un Set
export class EventService {
    private events: Array<IEvent> = [];
    private blackwords: string[] = ['prohibido1', 'prohibido2', 'prohibido3'];

    // devuelve todos los eventos
    public findAll(): Array<IEvent> {
        return new Array(...this.events); // devolver una copia del array events
    }
    // devuelve un evento filtrando por su id
    public findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id); // find devuelve un objeto
    }
    public findAllByPriority(prioridad: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === prioridad); // filter devuelve un Array
    }
    public save(event: IEvent): IEvent {
        if (event.id !== -1)
            throw new Error("Para crear un nuevo evento no se añade id");

        if(! this.isValid(event)) // si el evento es incorrecto entonces no se guarda
            throw new Error("Datos incorrectos");

        event.id = this.generateNextId();
        
        this.events.push(event);
        return event;
    }
    public update(event: IEvent): IEvent {
        if(!event.id)
            throw new Error("El id tiene que ser válido");

        let position = this.events.findIndex(
            currentEvent => currentEvent.id === event.id
        );

        if (position === -1)
            throw new Error("404 not found");

        if (this.isValid(event))
            this.events[position].title = event.title;

        this.events[position].priority = event.priority;
        this.events[position].fecha = event.fecha;
        this.events[position].description = event.description;
        return event;
    }

    public deleteById(id: number): boolean {

        let position = this.events.findIndex(
            currentEvent => currentEvent.id === id
        );

        if (position === -1)
            throw new Error("404 not found");

        // length === 0 quiere decir que no se ha borrado nada: false
        // length === 1 quiere decir que se ha borrado un objeto: true
        // length > 1 quiere decir que se ha más de un objeto: false
        return this.events.splice(position, 1).length === 1;  
    }

    private isValid(event: IEvent): boolean {
        // validación 1: title tenga longitud entre 10 y 50
        // if (event.title.length >= 10 && event.title.length <= 50)
        //     return true;
        if (event.title.length < 10 || event.title.length > 50)
            return false;

        // validación 2: title no esté ocupado ya
        for (const currentEvent of this.events)
            if(currentEvent.title === event.title) // si es true significa que el titulo ya existe
                return false;
        

        // validación 3: title no contenga una palabra prohibida
        for (const word of this.blackwords)
            if (event.title.includes(word))
                return false;
        
        return true; // todo OK
    }

    private generateNextId(): number {
        let maxId = 0;
        for (const event of this.events) {
            if (event.id > maxId)
                maxId = event.id;
        }
        return ++maxId;
    }
}