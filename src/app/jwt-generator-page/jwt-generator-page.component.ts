import { Component, OnInit } from '@angular/core';
import signing from 'getstream/src/lib/signing';

import KJUR from 'jsrsasign';

const JWT_SIGNING_ALGORITHM = "HS256";

@Component({
  selector: 'app-jwt-generator-page',
  templateUrl: './jwt-generator-page.component.html',
  styleUrls: ['./jwt-generator-page.component.scss']
})
export class JwtGeneratorPageComponent implements OnInit {
  private readonly jwtHeader = {alg: JWT_SIGNING_ALGORITHM};

  private jsonWebToken;
  private apiSecret;
  private resource = "*";
  private action = "*";
  private feedId = "*";
  private userId = "*";

  constructor() { }

  ngOnInit() {
    this.generateJWT();
  }

  onSubmit() {
    this.generateJWT();
  }

  private generateJWT() {
    if (!this.apiSecret) {
      return;
    }

    // Setup the JWT payload
    var jwtPayload = {
      resource: this.resource,
      action: this.action
    };

    // Add the optional feed id
    if (this.feedId) {
      jwtPayload['feed_id'] = this.feedId;
    }
    // Add the optional user id
    if (this.userId) {
      jwtPayload['user_id'] = this.userId;
    }

    var sHeader = JSON.stringify(this.jwtHeader);
    var sPayload = JSON.stringify(jwtPayload);

    this.jsonWebToken = KJUR.jws.JWS.sign(
      JWT_SIGNING_ALGORITHM,
      sHeader,
      sPayload,
      this.apiSecret
    );
  }

}
