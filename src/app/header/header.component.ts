import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output()
    sendChoice = new EventEmitter<string>();

    collapsed = true;
    
constructor(private dataStorageService:DataStorageService){}

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onSelect(choice: string) {
        this.sendChoice.emit(choice);
    }

}

