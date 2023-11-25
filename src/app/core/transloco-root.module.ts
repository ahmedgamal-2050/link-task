import {
  provideTransloco,
  TranslocoModule
} from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './services/transloco-http-loader.service';


@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
          config: {
              availableLangs: ['en', 'es'],
              defaultLang: 'en',
              // Remove this option if your application doesn't support changing language in runtime.
              reRenderOnLangChange: true,
              prodMode: !isDevMode(),
          },
          loader: TranslocoHttpLoader
      }),
  ],
})
export class TranslocoRootModule {}