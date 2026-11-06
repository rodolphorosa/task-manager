export class TaskEntity {
    id: string;
    title: string;
    description?: string;
    columnId: string;
    position: number;
    status: string;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: {
        id: string;
        title: string;
        description?: string;
        columnId: string;
        position: number;
        status: string;
        dueDate?: Date;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.columnId = data.columnId;
        this.position = data.position;
        this.status = data.status;
        this.dueDate = data.dueDate;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
    }
}
