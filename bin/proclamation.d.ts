declare namespace Proclamation {
    class Herald {
        private _heeders;
        constructor();
        proclaim(...params: any[]): void;
        hark(heederFunc: () => void, context?: any, once?: boolean): void;
        unhand(heederFunc: () => void, context?: any): void;
    }
}
//# sourceMappingURL=proclamation.d.ts.map