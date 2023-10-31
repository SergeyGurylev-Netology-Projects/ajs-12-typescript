import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getAmount(percentOff: number = 0): number {
        return this._items.reduce((result: number, item: Buyable) => {
            return result += item.price * (1 - percentOff / 100);
        }, 0);
    }

    delete(id: number): void {
        const index: number = this._items.findIndex(obj => {
            return obj.id === id;
        });

        if (index !== -1) {
            this._items.splice(index, 1);
        };
    }
}