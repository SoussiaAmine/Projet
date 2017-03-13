import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent }   from './app.component';
import { CustomModal } from './custom-modal-sample';


@NgModule({
  imports: [ 
    BrowserModule, 
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  
  // IMPORTANT: 
  // Since 'AdditionCalculateWindow' is never explicitly used (in a template)
  // we must tell angular about it.
  entryComponents: [ CustomModal ]
})
export class AppModule { }
