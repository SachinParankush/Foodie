import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // -----------------------------------------------------------------------
  // Local variables
  // -----------------------------------------------------------------------
  profileImage: any;
  personId: any;


  
  outLetDetails = [
    {
      "Place": "Banglore",
      "branchDetails":
        [
          {
            "Store_Name": "A-1",
            "Address": "Srirampura,Banglore",
            "Store_id": "12334"
          },
          {
            "Store_Name": "A-2",
            "Address": "QQQQQQ,Banglore",
            "Store_id": "12334"
          }
        ]

    },
    {
      "Place": "Mysore",
      "branchDetails":
        [
          {
            "Store_Name": "B-1",
            "Address": "fwefwe,Banglore",
            "Store_id": "12334"
          },
          {
            "Store_Name": "B-2",
            "Address": "Srirawefwempura,Banglore",
            "Store_id": "12334"
          }
        ]

    },
    {
      "Place": "Kolar",
      "branchDetails":
        [
          {
            "Store_Name": "A-1",
            "Address": "Srirampura,Banglore",
            "Store_id": "12334"
          },
          {
            "Store_Name": "A-1",
            "Address": "Srirampura,Banglore",
            "Store_id": "12334"
          }
        ]

    }


  ]
  // -----------------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------------

  constructor(private router: Router) {
    // this.personId = this.appState.signUpDetails.personId;
    // this.profileImage = appState.profileImage;

    // this.appState.signUpDetails.profileImg = localStorage.getItem("profileImg");

  }

  ngOnInit() { }

  

  //Logout method //

  logOut() {
    localStorage.clear();
    this.router.navigate(['/routesNoMenu/signIn']);
    
  }


}
