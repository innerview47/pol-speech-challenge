import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal'

import { SideNavComponent } from '../../_components/elements/side-nav/side-nav.component';
import { FormComponent } from '../../_components/elements/form/form.component';
import { DynamicInputsComponent } from '../../_components/elements/form/dynamic-inputs/dynamic-inputs.component';


@NgModule({
  declarations: [SideNavComponent, FormComponent, DynamicInputsComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ModalModule.forRoot()],
  exports: [SideNavComponent, FormComponent, DynamicInputsComponent],
  providers: [BsModalRef]
})
export class SharedModule { }
