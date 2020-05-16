import { Component, OnInit } from '@angular/core';
import { apiService} from '../../api.service'



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public dataSize :any
  public value = '';
  public row: any

  constructor(private apiService : apiService) { }

  ngOnInit() {
  
  }


  // Below here a call is made to the service to return a list of movies 
  // The users input is captured in the text box and 

  
  public callForPicture() {
    this.apiService.getMovies(this.value).subscribe(resp=>{
      console.log("this is value"+ this.value)
      if(resp){
          console.log("This is the resp"+JSON.stringify(resp['results']))
          let size = resp['results'].length
          this.dataSize= new Array(size)
          for (let i=0; i< size; i++){
            this.dataSize[i]=resp["results"][i]
          }
          

          let temp = Math.floor(this.dataSize.length/3)
          let temp2 = this.dataSize.length
          this.row = new Array<any>(temp)

          for(let i =0; i<temp; i++){
            this.row[i]=new Array<Object>()
          }

          let counter =0

          for(let i =0; i<temp2; i++){
            if(counter == temp) {
              counter=0
            }
            this.row[counter].push(this.dataSize[i])
            counter ++       
          }

          console.log(JSON.stringify(this.row))

      }
      },error =>{
          if(error){
              console.error("this is the error "+ JSON.stringify(error))
          }             
      })
  }

}
