import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Search</h5>
  <input type="text"
  class="form-control"
  placeholder="Search gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `
})

export class SearchBoxComponent   {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;



  constructor( private gifService: GifsService ) { }


  // searchTag( newTag: string) {
    searchTag( ) {
      const newTag = this.tagInput.nativeElement.value;

      this.gifService.searchTag(newTag);

      this.tagInput.nativeElement.value = '';


  }


}
