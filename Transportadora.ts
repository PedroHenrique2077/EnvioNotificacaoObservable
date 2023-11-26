import { Observable } from './Observable.interface';
import { Observer } from './Observer.interface';

export class Transportadora implements Observable {
    private observers: Observer[] = [];
    private status: string = '';

    // Método para adicionar um observador
    subscribe(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Observer já inscrito.');
        }

        this.observers.push(observer);
    }

    // Método para remover um observador
    unsubscribe(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    }

    // Método para notificar todos os observadores
    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    // Método para mudar status e notificar observadores
    setStatus(status: string): void {
        this.status = status;
        this.notifyObservers();
    }

    // Método para obter o status atual
    getStatus(): string {
        return this.status;
    }
}