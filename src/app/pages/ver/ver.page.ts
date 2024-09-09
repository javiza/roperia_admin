import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { VertodoComponent } from 'src/app/component/vertodo/vertodo.component';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, VertodoComponent]
})
export class VerTodoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
