import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Carga modulo raiz
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
