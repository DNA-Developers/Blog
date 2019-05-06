import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

const material = [
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule
]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

