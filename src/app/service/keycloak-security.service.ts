import { Injectable } from '@angular/core';
import { KeycloakInstance } from 'keycloak-js';
import * as Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  // client pour le serveur d'authentification de keycloak
  public kc:KeycloakInstance;

  async init(){
    console.log("Je suis initialise ...............");
    // @ts-ignore
    this.kc = new Keycloak({
      url:"http://localhost:8080/auth",
      realm:"immo-agence",
      clientId:"AngularImmoApp"
    });
    await this.kc.init({
      onLoad: "login-required"
      //onLoad: "check-sso", // verifie si l'utilisateur est deja authentifie "verifie les cookies"
    });
    console.log(this.kc.token);
  }
}
