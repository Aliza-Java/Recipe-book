import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output()
    sendChoice = new EventEmitter<string>();

    collapsed = true;
    
    onSelect(choice: string) {
        this.sendChoice.emit(choice);
    }

}

