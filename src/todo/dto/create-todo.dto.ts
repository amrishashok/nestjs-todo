export class CreateTodoDto {
    readonly _id?: string; 
    readonly title: string;
    readonly isCompleted: boolean;
    readonly completedDate: string;
}