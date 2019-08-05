import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  first: string = "";
  last: string = "";
  first_name: string = "";
  last_name: string = "";
  // email: string = "";
  // office_phone: string = "";
  // street: string = "";
  // zip_code: string = "";

  contacts = [];
  enabled = false;
  enabledEdit = false;
  view = false;
  enableViewId;

  constructor(private formBuilder: FormBuilder) {
  }


  addContact(id) {
    this.contacts.push({
      first_name: this.first_name,
      last_name: this.last_name,
      id: ++this.contacts[this.contacts.length - 1].id
      // email: this.email,
      // office_phone: this.office_phone,
      // street: this.street,
      // zip_code: this.zip_code
    });

    // dataService.addContact({
    // fields
    //})

    // refresh

    this.cancel();
    // show success msg
  }

  cancel() {
    this.first_name = "";
    this.last_name = "";

    this.enabled = false;
  }

  cancelSubmitted(id) {

    let y = this.contacts.findIndex(x => x.id === id);

    this.contacts[y] = ({
      first_name: this.contacts[y].first_name,
      last_name: this.contacts[y].last_name,
      id: this.contacts[y].id
    });

    this.enableViewId = null;
    this.enabledEdit = false;
  }

  deleteContact(id: number) {
    console.log("id: " + id);
    const pos = id;
    this.contacts.splice(pos, 1);

    // dataService.deleteContact
  }

  enableView(id) {
    this.view = true;

    console.log("enableView: " + id);

    this.enableViewId = id;

    // let y = this.contacts.findIndex(x => x.id === id);


    // this.contacts[y].class

    // this.contacts.push({
    //   first_name:  this.contacts[y].first_name,
    //   last_name:  this.contacts[y].last_name,
    //   // email: this.email,
    //   // office_phone: this.office_phone,
    //   // street: this.street,
    //   // zip_code: this.zip_code
    // });
  }

  enableEdit() {
    this.enabledEdit = true;
  }

  enable(id: number) {
    this.enabled = true;
  }
  private regForm: any;

  edit(id) {
    let y = this.contacts.findIndex(x => x.id === id);
    // console.log(this.regForm.get('first').value);

    this.contacts[y] = ({
      first_name: (<HTMLInputElement>document.getElementById("first")).value,
      last_name: (<HTMLInputElement>document.getElementById("last")).value,
      id: id
    });

    this.enableViewId = null;
    this.enabledEdit = false;
  }

  ngOnInit() {
    this.contacts.push({
      first_name: "first_name",
      last_name: "this.last_name",
      id: 0
      // email: this.email,
      // office_phone: this.office_phone,
      // street: this.street,
      // zip_code: this.zip_code
    }, {
        first_name: "john",
        last_name: "alex",
        id: 1
      });

    // this.regForm = this.formBuilder.group({
    //   first: [''],
    //   last: ['']
    // })
  }
}