import { Injectable } from '@angular/core';


@Injectable()
export class AppState {
// -----------------------------------------------------------------------
  // Local Variables
  // -----------------------------------------------------------------------
  
  // To hold login profile related information
   disablecheckfalse = true;
  globalLoginData = {    
    
    "userId":"",    
    "roleId": "",
    "personEmail": ""   
    
  }

  // -----------------------------------------------------------------------------
  // Constructor
  //-----------------------------------------------------------------------------
  constructor() {
    
    
  }



  resetData() {

    this.globalLoginData = {
        "userId":"",    
        "roleId": "",
        "personEmail": ""
    }
  }

  // -------------------------------------------------------------------------------------
  // ngOnInit
  // ------------------------------------------------------------------------------------
  ngOnInit() {}

}
 