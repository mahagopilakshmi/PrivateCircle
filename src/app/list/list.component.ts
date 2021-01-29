import { Component } from '@angular/core';
import { DETAILS } from '../data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  displayedColumns: string[] = ['date', 'list_name', 'no_of_entities', 'actions', 'details'];
  dataSource = DETAILS;
  showDescription = false;
  descriptionArr = null;
  selectedRowIndex = -1;
  originalData;


  ngOnInit() {
    this.originalData = this.dataSource;
  }

  /**
   * show details for the selected row in the table
   * @param elt 
   */
  showDetails(elt) {
    this.descriptionArr = null;
    this.showDescription = true;
    this.descriptionArr = elt.details;
    this.dataSource.forEach(data => data.selected = false);
    elt.selected = !elt.selected;
  }

  /**
   * 
   * @param row highlights the row catching the event from the details cell(event bubbling)
   */
  highlight(row) {
    this.selectedRowIndex = row.id;
  }

  /**
   * 
   * @param e returns the filtered list based on serach text
   */
  searchListName(e) {
    if (e.length > 0) {
      this.dataSource = this.dataSource.filter(data => {
        return data.list_name.toLowerCase().includes(e.toLowerCase());
      });
    } else {
      this.dataSource = this.originalData;
    }
  }
}
