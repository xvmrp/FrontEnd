import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VerGastosComponent } from './components/ver-gastos/ver-gastos.component';
import { PagarGastoComponent } from './components/pagar-gasto/pagar-gasto.component';
import { VerPagosComponent } from './components/ver-pagos/ver-pagos.component';

@NgModule({
  declarations: [
    VerGastosComponent,
    PagarGastoComponent,
    VerPagosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    VerGastosComponent,
    PagarGastoComponent,
    VerPagosComponent
  ]
})
export class GastosComunesModule {}