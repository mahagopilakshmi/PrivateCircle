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
  listname = "";
  originalData;


  ngOnInit() {
    this.originalData = this.dataSource;
  }

  showDetails(elt) {
    this.descriptionArr = null;
    this.showDescription = true;
    this.descriptionArr = elt.details;
    this.dataSource.forEach(data => data.selected = false);
    elt.selected = !elt.selected;
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
  }

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
