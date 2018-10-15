import { Component } from '../component.model';
import { ComponentField } from '../component-field.model';

export class ButtonComponent extends Component {
    type = 'button';
    previewText(): string {
        return 'Button';
    }

    getFields(): ComponentField[] {
        return undefined;
    }
}