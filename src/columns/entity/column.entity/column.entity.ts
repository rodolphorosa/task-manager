export class ColumnEntity {
    id: string;
    title: string;
    boardId: string;
    position: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: {
        id: string;
        title: string;
        boardId: string;
        position: number;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.boardId = data.boardId;
        this.position = data.position;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
    }
}
