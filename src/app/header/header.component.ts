import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{

    @Output()
    sendChoice = new EventEmitter<string>();

    collapsed = true;

    private userSub: Subscription;
    isAuthenticated: boolean = false;
    
    constructor(private dataStorageService:DataStorageService, private authService: AuthService){}

    ngOnInit(){
        this.userSub = this.authService.user.subscribe(user=>{
            this.isAuthenticated = !!user;
        });
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

    onSelect(choice: string) {
        this.sendChoice.emit(choice);
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}