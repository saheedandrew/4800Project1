import {Injectable} from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders, } from "@angular/common/http"
import { CardsComponent } from './components/cards/cards.component'




@Injectable()
export class apiService{


    // I would usually store the api key inside a env file but due to time contraints i wasnt able to add this feature
    // However I added the URL link of the movie api and the api key is also included



    private url  = "https://api.themoviedb.org/3/search/movie/?api_key=de1da7dce090e74693b25df0524efa18&query=mama"
    


    constructor(private httpclient: HttpClient ){}
    
    // this function takes the string passed from the UI and sends it off 
    // then makes a request to the api while we make a get request to the api

     getMovies(movieInfo : string){
         let tempUrl = new URL(this.url)
         if (movieInfo !=undefined && movieInfo.length>0){
            tempUrl.searchParams.append('query',movieInfo)
         }         
        return this.httpclient.get(tempUrl.toString())
    }

}