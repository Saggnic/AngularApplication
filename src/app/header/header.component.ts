import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage-service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService) {}
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  onSaveData() {
    this.dataStorage.storeRecipe();
  }
  onFetchData() {
    this.dataStorage.fetchrecipe().subscribe();
  }
}
