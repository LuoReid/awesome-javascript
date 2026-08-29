import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideZoneChangeDetection } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    applicationProviders: [provideZoneChangeDetection()],
  })
  .catch((err: any) => console.error(err));
