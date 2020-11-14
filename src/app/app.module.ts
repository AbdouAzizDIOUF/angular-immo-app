import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienComponent } from './bien/bien.component';
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakSecurityService } from './service/keycloak-security.service';

// initialisation de la service keycloakSecurity avant la demarrage de l'appli
export function keycloakSecurityFactory(keycloaksecurityService:KeycloakSecurityService) {
  return ()=> keycloaksecurityService.init();
}


@NgModule({
  declarations: [
    AppComponent,
    BienComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloakSecurityService], useFactory:keycloakSecurityFactory, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
