import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal'
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { SideNavComponent } from '../../_components/elements/side-nav/side-nav.component';
import { FormComponent } from '../../_components/elements/form/form.component';
import { DynamicInputsComponent } from '../../_components/elements/form/dynamic-inputs/dynamic-inputs.component';
import { NavBarComponent } from '../../_components/elements/nav-bar/nav-bar.component';


@NgModule({
  declarations: [SideNavComponent, FormComponent, DynamicInputsComponent, NavBarComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ModalModule.forRoot(), PaginationModule.forRoot()],
  exports: [SideNavComponent, FormComponent, DynamicInputsComponent, NavBarComponent],
  providers: [BsModalRef]
})
export class SharedModule { }
