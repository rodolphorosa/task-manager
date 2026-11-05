export class BoardEntity {
    id: string;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: {
        id: string;
        title: string;
        description?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.createdAt = data.createdAt ?? new Date();
        this.updatedAt = data.updatedAt ?? new Date();
    }
}
