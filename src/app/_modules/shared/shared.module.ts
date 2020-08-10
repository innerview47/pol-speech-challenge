import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SideNavComponent } from '../../_components/elements/side-nav/side-nav.component';
import { CrudComponent } from '../../_components/common/crud/crud.component';
import { FormComponent } from '../../_components/elements/form/form.component';
import { DynamicInputsComponent } from '../../_components/elements/form/dynamic-inputs/dynamic-inputs.component';


@NgModule({
  declarations: [SideNavComponent, CrudComponent, FormComponent, DynamicInputsComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [SideNavComponent, CrudComponent, FormComponent, DynamicInputsComponent]
})
export class SharedModule { }
