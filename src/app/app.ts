import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

   mdq: MediaQueryList | undefined;
  mediaQueryListener: ((event: MediaQueryListEvent) => void) | undefined;

  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {}

  ngAfterViewInit() {
    this.mdq = this.media.matchMedia('(max-width: 414px)');

    this.mediaQueryListener = (event: MediaQueryListEvent) => {
      console.log('Match?:', event.matches);
      this.changeDetectorRef.detectChanges();
    };

    this.mdq.addEventListener('change', this.mediaQueryListener);

    // Log iniziale per vedere lo stato attuale subito
    console.log('Match iniziale?:', this.mdq.matches);
  }

  ngOnDestroy() {
    if (this.mdq && this.mediaQueryListener) {
      this.mdq.removeEventListener('change', this.mediaQueryListener);
    }
  }

  isMobile(): boolean {
    return this.mdq?.matches ?? false;
  }
}
