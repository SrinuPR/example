// Angular
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Ionic
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// import { HttpModule } from '@demoiselle/http';
import { AuthServiceProvider, SecurityModule } from '@demoiselle/security';
import { HttpServiceProvider } from '@demoiselle/http';
import { MomentModule } from 'angular2-moment';

// Providers / Services
import { LoginService } from '../providers/login-service';
import { TodoService } from '../providers/todo-service';

// App Components
import { MyApp, AppEvents } from './app.component';
import { TodoListPage } from '../pages/todo-list/todo-list';
import { TodoFormPage } from '../pages/todo-form/todo-form';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

let storage = new Storage();

@NgModule({
  declarations: [
    MyApp,
    // Pages
    TodoListPage,
    TodoFormPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    SecurityModule,
    MomentModule,
    RouterModule.forRoot([], { useHash: true })
  ],
  exports: [RouterModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodoListPage,
    TodoFormPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpServiceProvider({
      endpoints: { main: 'https://todo-fwkdemoiselle.rhcloud.com/api/v1/' },
      multitenancy: false,
      tokenGetter: () => storage.get('id_token'),
      unAuthorizedRoute: (args) => {
        AppEvents.publish('auth:unauthorizred', args, Date.now());
      },
      tokenKey: 'id_token'
    }),
    AuthServiceProvider({
      authEndpointUrl: 'https://todo-fwkdemoiselle.rhcloud.com/api/v1/',
      loginResourcePath: 'auth',
      tokenGetter: () => storage.get('id_token'),
      tokenSetter: (val: string) => storage.set('id_token', val),
      tokenRemover: () => storage.remove('id_token'),
      tokenKey: 'id_token',
      loginRoute: (args) => {
        AppEvents.publish('auth:login-success', args, Date.now());
      }
    }),
    LoginService,
    TodoService
  ]
})
export class AppModule { }