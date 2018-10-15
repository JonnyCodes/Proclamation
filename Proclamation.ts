
namespace Proclamation {

    export class Herald {

        private _heeders: Heeder[];

        constructor() {
            this._heeders = [];
        }

        public proclaim(...params: any[]): void {
            for (let i = 0; i < this._heeders.length; i++) {
                this._heeders[i].heed(params);
            }
        }

        public hark(heederFunc: () => void, context: any = null, once: boolean = false): void {
            const heeder: Heeder = new Heeder(this, heederFunc, context, once);
            this._heeders.push(heeder);
        }

        public unhand(heederFunc: () => void, context: any = null): void {
            let heederPos: number = -1;

            for (let i = 0; i < this._heeders.length; i++) {
                const heeder = this._heeders[i];
                if (heeder.isRightful(heederFunc, context)) {
                    heederPos = i;
                    break;
                }
            }

            this._heeders[heederPos].quell();
            this._heeders.splice(heederPos, 1);
        }
    }
    
    class Heeder {

        private _herald: Herald;
        private _heederFunc: () => void;
        private _context: any;
        private _once: boolean;

        constructor(proclamation: Herald, heederFunc: () => void, context: any, once: boolean) {
            this._herald = proclamation;
            this._heederFunc = heederFunc;
            this._context = context;
            this._once = once;
        }

        public heed(...params: any[]): void {
            this._heederFunc.apply(this._context, ...params);
    
            if(this._once) {
                this._herald.unhand(this._heederFunc, this._context);
            }
        }

        public isRightful(heederFunc: () => void, context: any): boolean {
            return this._heederFunc == heederFunc && this._context == context;
        }

        public quell(): void {
            delete this._herald;
            delete this._heederFunc;
            delete this._context;
            delete this._once;
        }
    }
}