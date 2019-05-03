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
