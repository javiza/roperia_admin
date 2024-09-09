import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { IonButton, IonItem, IonContent, IonLabel, IonInput, IonList} from '@ionic/angular/standalone'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonContent, IonLabel, IonInput, IonList,
    ReactiveFormsModule
  ]
})
export class FormularioComponent  implements OnInit {

  
  ngOnInit() {}
  ropaForm = new FormGroup({
      nombre: new FormControl('sabana'),
      cantidad: new FormControl(2),
      descripcion: new FormControl('descripcion')
    })

}
