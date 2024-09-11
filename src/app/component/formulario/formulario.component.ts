import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms'
import { IonButton, IonItem, IonContent, IonLabel, IonInput, IonList} from '@ionic/angular/standalone'
import { Prenda, PrendaService } from 'src/app/servicios/prenda.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonContent, IonLabel, IonInput, IonList,
    ReactiveFormsModule, FormsModule,
  ]
})
export class FormularioComponent  {
  prendas: Prenda[] = []
  nombre: string = "";
  cantidad!: number; 
  descripcion: string = "";

  constructor(
    private dbService:PrendaService
  ) {}
  
  
  async ngOnInit() {
    await this.dbService.IniciarPlugin();
    this.actualizar()
  }
  async ngOnDestroy(){
    await this.dbService.cerrarConexion();
  }
  async actualizar(){
    this.prendas = await this.dbService.findAllPrendas()
  }
  async agregar() {
    const prenda:Prenda = {nombre: this.nombre, cantidad: this.cantidad, descripcion: this.descripcion}
    await this.dbService.addPrenda(prenda)
    await this.actualizar()
  }
  async actualizarPrenda(prenda: Prenda){
    const prendaEditada = {
      id: prenda.id,
      nombre: prenda.nombre,
      cantidad: prenda.cantidad,
      descripcion: prenda.descripcion
    }
  }
  async eliminar(prenda: Prenda){
    if(prenda.id){
      await this.dbService.deletePrenda(prenda.id)
      await this.actualizar()
    }
  }

}
