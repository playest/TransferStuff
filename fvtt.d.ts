global {
    export declare const game: any;
    const ui: any;
    function diffObject(o1: Record<string, any>, o2:Record<string, any>): Record<string, any>;
    interface Map<K, V> {
        filter(f: (value: V) => boolean): V[],
        forEach(f: (value: V) => void): void,
    }

    interface JQuery {
        find(selector: string): JQuery,
        val<T>(): T,
        is(selector: string): boolean,
    }

    export var Dialog = FoundryVTT.Dialog;

    class Hooks {
        //static on<T extends keyof HooksMap>(event: T, callback: FoundryVTT.HooksMap[T]);
        static once(event: "init", callback: () => void);
        static on(event: "createItem", callback: (createdItem: Item, options: {"temporary":boolean, "renderSheet":boolean, "render":boolean}, userId) => void);
        static on(event: "dropActorSheetData", callback: (dragTargetActor: Actor, sheet: Sheet, futureItem: FutureItem) => voi);
    }
}



export namespace FoundryVTT {

    type ActorType = "character" | "npc" | "vehicle";
    type DocumentType = "Item" | "Character";

    interface Sheet {

    }

    interface Document {
    }

    interface FutureItemDataData {
        quantity: number,
    }

    interface FutureItem<More = {}> {
        type: string,
        actorId: ActorId,
        data: {
            data: FutureItemDataData & More,
            name: string,
            type: "class" | "tool" | "feat" | "loot",
            _id: ItemId
        }
    }

    interface ItemDataData {
        quantity: number,
    }

    interface Item<More = {}> extends Document {
        parent: Actor,
        name: string,
        data: {
            type: unknown,
            _id: ItemId,
            data: ItemDataData & More,
        },
        update(fieldsAndValues: Record<string, any>): Promise<Item>,
    }

    interface Actor extends Document {
        deleteEmbeddedDocuments?(type: DocumentType, documentIds: DocumentId[]): void,
        deleteOwnedItem(documentId: DocumentId): void,
        items: Map<ItemId, Item>,
        data : {
            _id: ActorId,
            type: ActorType;
        }
    }

    type DocumentId = ItemId;

    interface ItemId extends string {
        private item: void;
    }

    interface ActorId extends string {
        private actor: void;
    }

    interface UserId extends string {
        private user: void;
    }

    class Dialog {
        constructor(options: DialogOptions);
        render(render: boolean);
    }

    interface DialogOptions {
        title: string;
        content: string;
        buttons: {[buttonName: string]: {label: string, callback: (html: JQuery) => void}};
        default: string;
        close(html: JQuery): void;
    }
}