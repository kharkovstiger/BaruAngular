import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {Book} from './book';
import {DialogComponent} from './dialog.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})

export class TableComponent {
  displayedColumns = ['author', 'date', 'title', 'actions'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource;
  // dialog: MdDialog;

  constructor(public dialog: MdDialog) {}

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }

  edit(row){

    let dialogRef = this.dialog.open(DialogComponent, {
      data: row,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }
}

/** Constants used to fill up our data base. */
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  get data(): Book[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 7; i++) { this.addBook(); }

  }

  /** Adds a new user to the database. */
  addBook() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewBook());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewBook() {

    return {
      author: NAMES[this.data.length],
      date: new Date(),
      title: NAMES[this.data.length]
    };
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Book[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}
}
