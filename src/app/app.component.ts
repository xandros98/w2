import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  first_name_inp: string = "";
  last_name_inp: string = "";
  email_inp: string = "";
  office_phone_inp: string = "";
  street_inp: string = "";
  zip_code_inp: string = "";

  first_name: string = "";
  last_name: string = "";
  email: string = "";
  office_phone: string = "";
  street: string = "";
  zip_code: string = "";

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
      email: this.email,
      office_phone: this.office_phone,
      street: this.street,
      zip_code: this.zip_code,
      id: ++this.contacts[this.contacts.length - 1].id
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
    this.email = "";
    this.office_phone = "";
    this.street = "";
    this.zip_code = "";

    this.enabled = false;
  }

  cancelSubmitted(id) {

    let y = this.contacts.findIndex(x => x.id === id);

    this.contacts[y] = ({
      first_name: this.contacts[y].first_name,
      last_name: this.contacts[y].last_name,
      email: this.contacts[y].email,
      office_phone: this.contacts[y].office_phone,
      street: this.contacts[y].street,
      zip_code: this.contacts[y].zip_code,
      id: this.contacts[y].id
    });

    this.enableViewId = null;
    this.enabledEdit = false;
  }

  deleteContact(id: number) {
    const pos = id;

    this.contacts.splice(pos, 1);
    // dataService.deleteContact
  }

  enableView(id) {
    this.view = true;

    this.enableViewId = id;
  }

  enableEdit() {
    this.enabledEdit = true;
  }

  enable(id: number) {
    this.enabled = true;
  }

  edit(id) {
    let y = this.contacts.findIndex(x => x.id === id);

    this.contacts[y] = ({
      first_name: (<HTMLInputElement>document.getElementById("first_name_inp")).value,
      last_name: (<HTMLInputElement>document.getElementById("last_name_inp")).value,
      email: (<HTMLInputElement>document.getElementById("email_inp")).value,
      office_phone: (<HTMLInputElement>document.getElementById("office_phone_inp")).value,
      street: (<HTMLInputElement>document.getElementById("street_inp")).value,
      zip_code: (<HTMLInputElement>document.getElementById("zip_code_inp")).value,
      id: id
    });

    this.enableViewId = null;
    this.enabledEdit = false;
  }

  ngOnInit() {
    this.contacts.push({
      first_name: "first_name",
      last_name: "this.last_name",
      email: "sdfsd",
      office_phone: "sdfsfsds",
      street: "this.street",
      zip_code: "dsfffs",
      id: 0
    }, {
        first_name: "dsfasfdsfsaf",
        last_name: "sdfsdfadfdsafdsf.fsdfsdf",
        email: "sdfssdfsfsfdsfsasdfasfdd",
        office_phone: "sdfsfsfasdfadsffsds",
        street: "sdfdsfdfsdfsf.sfsfasdfdsfasdfasfdsfasf",
        zip_code: "dsfffs",
        id: 1
      });
  }
}