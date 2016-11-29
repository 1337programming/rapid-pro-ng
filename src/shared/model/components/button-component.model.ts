import { Component } from '../component.model';

export class ButtonComponent extends Component {
    type = 'button';
    previewText(): string {
        return 'Button';
    }
}