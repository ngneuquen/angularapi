import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class HeladosService{
    url :string;
    headers:HttpHeaders;
    constructor(private _http:HttpClient){
        this.url= "http://localhost:3801/api/helado/";
        this.headers= new HttpHeaders().set('Content-Type','application/json');

    }
    // LIST
    list():Observable<any>{
        return this._http.get(this.url,{headers:this.headers});
    }
    save(helado):Observable<any>{
        return this._http.post(this.url,helado,{headers:this.headers});
    }
    show(id):Observable<any>{
        return this._http.get(this.url+id,{headers:this.headers});
    }
}

