import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { TextMaskModule } from "angular2-text-mask";

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
