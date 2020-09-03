import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;

    @Output()
    sendChoice = new EventEmitter<string>();

    onSelect(choice: string) {
        this.sendChoice.emit(choice);
    }

}

