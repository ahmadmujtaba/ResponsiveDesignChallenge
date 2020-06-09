import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { from } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "FrontEndResposiveChallenge";
  cvvPattern = "0000";
  IsValidExpiryDate = false;
  model: NgbDateStruct;
  date: { year: number; month: number };
  today = new Date();
  @ViewChild("credirCardNo") cardNo;
  @ViewChild("f") frm: NgForm;
  payMethod = 1;
  constructor(private calendar: NgbCalendar) {
    this.model = this.calendar.getToday();
  }
  onSubmit(form: NgForm) {
    // console.log(form.form);
    const values = this.frm.value;
    console.log(values.expiryDate);
    console.log(this.frm);
  }
  validatExpiryDate() {
    const values = this.frm.value;
    console.log(values.expiryDate);
    const month = values.expiryDate.slice(0, 2);
    const year = values.expiryDate.slice(2, 4);
    const expiryDate = new Date(20 + year, +month - 1);
    if (expiryDate > new Date()) {
      this.IsValidExpiryDate = true;
    } else {
      this.IsValidExpiryDate = false;
    }
  }

  creditCardFocusOut() {
    if (this.cardNo.value.startsWith(34)) {
      this.cvvPattern = "0000";
    } else {
      this.cvvPattern = "000";
    }
  }
}
