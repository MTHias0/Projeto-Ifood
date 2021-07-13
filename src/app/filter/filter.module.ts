import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCardComponent } from './filter-card/filter-card.component';
import { FilterListComponent } from './filter-list/filter-list.component';

@NgModule({
  declarations: [FilterCardComponent, FilterListComponent],
  imports: [CommonModule],
  exports: [FilterCardComponent],
})
export class FilterModule {}
