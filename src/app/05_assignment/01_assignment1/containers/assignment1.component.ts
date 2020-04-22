import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  title="Assignment-01";
  public input: string;
  
  inputHandler(text){
     
    this.input =text.target.value;
  }

}
