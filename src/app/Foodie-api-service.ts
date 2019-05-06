import { Injectable, Input, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import * as config from './providers/config';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class FoodieApiService {
    private headers = new Headers({
        'Content-Type': 'application/json',
        'charset': 'UTF-8'
    });
    private options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }

    /* ----------------------------------------------------------------------------------
    **   Http call to create api 
    ------------------------------------------------------------------------------------*/
    createData(createData): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE,config.CREATEDATA)
        console.log("calling create method");
        return this.http.post(url,
            JSON.stringify(createData),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **   Http call to update  api 
    ------------------------------------------------------------------------------------*/
    updateData(updateData): Observable<any> {
        console.log("calling updateData method");
        var url = this.getUrl(config.SERVERTYPE,config.UPADTEDATA)
        return this.http.post(url,
            JSON.stringify(updateData),
            this.options)
            .map(res => res.json()
            );
    }
   
    /* ----------------------------------------------------------------------------------
    **  Http call to retrieveByKey api 
    ------------------------------------------------------------------------------------*/
    retrieveByKey(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE,config.RETRIEVEBYKEY);
        console.log("calling retrieveByKey method : "+JSON.stringify(retrive));
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

      /* ----------------------------------------------------------------------------------
    **  Http call to retrive all
    ------------------------------------------------------------------------------------*/
    retrieveAll(retrive): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE,config.RETRIEVEALL);
        console.log("calling retrieveAll method");
        return this.http.post(url,
            JSON.stringify(retrive),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to create signUp data 
    ------------------------------------------------------------------------------------*/
    signUp(createSignUpTable): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE,config.SIGNUP);
        console.log("calling signUp method");
        return this.http.post(url,
            JSON.stringify(createSignUpTable),
            this.options)
            .map(res => res.json()
            );
    }

    /* ----------------------------------------------------------------------------------
    **  Http call to  signIn data 
    ------------------------------------------------------------------------------------*/
    signIn(signIn): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE,config.SIGNIN);
        console.log("calling signIn method");
        return this.http.post(url,
            JSON.stringify(signIn),
            this.options)
            .map(res => res.json()
            );
    }     

    /* ----------------------------------------------------------------------------------
    **   Http call to delete data in tblattachment
    ------------------------------------------------------------------------------------*/
    deleteData(params): Observable<any> {
        var url = this.getUrl(config.SERVERTYPE,config.DELETEDATA);
        console.log("calling service  deleteData ");
        return this.http.post(url,
            JSON.stringify(params),
            this.options)
            .map(res => res.json()
            );
    }

    // API is get the Apiendpoint url based on the parameter passed handling both Web and Device
   getUrl(type, keyUrl : any) : string {
   // var url
    // if(type == "DEVELOPMENT") {
    //     url = config.SERVER_URL_DEV + keyUrl    
    // } else if (type == "UAT"){
    //     url = config.SERVER_URL_UAT + keyUrl
    //     return url;
    // } else if (type == "PRODUCTION"){
    //     url = config.SERVER_URL_PROD + keyUrl
    //     return url;
    // }
    return keyUrl;
   // console.log("The API URL IS " + url) 
         
}

}