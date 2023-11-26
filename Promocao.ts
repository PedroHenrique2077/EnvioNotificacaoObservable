import { Observable } from './Observable.interface';
import { Observer } from './Observer.interface';

export class Promocao implements Observable {
    private observers: Observer[] = [];

    public subscribe(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            console.log('Cliente já está inscrito.');
            return;
        }

        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    public notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }

    public anunciarPromocao(promocao: string): void {
        this.notifyObservers(`Promoção imperdível: ${promocao}`);
    }
}