import { Component, ChangeDetectionStrategy, signal, Renderer2, Inject, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.high-contrast]': 'highContrast()'
  }
})
export class AppComponent {
  highContrast = signal(false);
  fontSize = signal<'base' | 'lg' | 'xl'>('base');

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {
    effect(() => {
      const size = this.fontSize();
      let newFontSize = '16px'; // base
      if (size === 'lg') newFontSize = '18px';
      if (size === 'xl') newFontSize = '20px';
      this.renderer.setStyle(this.document.documentElement, 'font-size', newFontSize);
    });
  }

  onContrastToggle(): void {
    this.highContrast.update(v => !v);
  }

  onFontSizeChange(size: 'base' | 'lg' | 'xl'): void {
    this.fontSize.set(size);
  }
}