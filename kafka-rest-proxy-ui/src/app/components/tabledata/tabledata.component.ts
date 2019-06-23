import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit, OnChanges {

  displayedColumns: string[] = [];
  
  @Input()
  data :any[];

  @Input()
  columns: string[] = [];
  
  @Output()
  onRowClick: EventEmitter<string>;

  datasource: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(private json: JsonPipe, private changeDetectorRef: ChangeDetectorRef) { 
    this.onRowClick = new EventEmitter();
    if (this.data != undefined) {
      this.datasource = new MatTableDataSource<any>(this.data);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit() {    
    if (this.data != undefined) {
      this.datasource = new MatTableDataSource<any>(this.data);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.columns != undefined) {
      this.displayedColumns = this.columns;
    }
    if (this.data != undefined) {
      this.datasource = new MatTableDataSource<any>(this.data);
      this.changeDetectorRef.detectChanges();
    }
  }

  getInfo(data: any): string {
    if (Array.isArray(data) || typeof data === 'object') {
      return this.json.transform(data)
    }
    return data
  }

  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
}
