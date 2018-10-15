import { ComponentField } from './component-field.model';

export abstract class Component {
    abstract type: string;
    abstract previewText(): string;
    abstract getFields(): ComponentField[];

    isComplete(): boolean {
        return this.getFields().every(f => f.isComplete);
    }
}
