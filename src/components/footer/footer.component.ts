import { Component, ChangeDetectionStrategy, signal, output, input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnDestroy {
  currentYear = new Date().getFullYear();
  isWidgetMounted = signal(false);
  isWidgetVisible = signal(false);
  
  contrastLoading = signal(false);
  fontSizeLoading = signal<'base' | 'lg' | 'xl' | null>(null);

  highContrast = input(false);
  fontSize = input<'base' | 'lg' | 'xl'>('base');

  contrastToggle = output<void>();
  fontSizeChange = output<'base' | 'lg' | 'xl'>();

  private contrastTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private fontSizeTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private widgetAnimationTimeoutId: ReturnType<typeof setTimeout> | null = null;

  toggleWidget(): void {
    if (this.widgetAnimationTimeoutId) {
      clearTimeout(this.widgetAnimationTimeoutId);
    }

    if (this.isWidgetMounted()) {
      this.isWidgetVisible.set(false);
      this.widgetAnimationTimeoutId = setTimeout(() => {
        this.isWidgetMounted.set(false);
        this.widgetAnimationTimeoutId = null;
      }, 300); // Animation duration
    } else {
      this.isWidgetMounted.set(true);
      // Wait a tick for DOM update before making it visible
      this.widgetAnimationTimeoutId = setTimeout(() => {
        this.isWidgetVisible.set(true);
        this.widgetAnimationTimeoutId = null;
      }, 10);
    }
  }

  toggleHighContrast(): void {
    if (this.contrastTimeoutId) {
      clearTimeout(this.contrastTimeoutId);
    }
    this.contrastLoading.set(true);
    this.contrastToggle.emit();
    this.contrastTimeoutId = setTimeout(() => {
      this.contrastLoading.set(false);
      this.contrastTimeoutId = null;
    }, 300);
  }
  
  changeFontSize(size: 'base' | 'lg' | 'xl'): void {
    if (this.fontSizeTimeoutId) {
      clearTimeout(this.fontSizeTimeoutId);
    }
    this.fontSizeLoading.set(size);
    this.fontSizeChange.emit(size);
    this.fontSizeTimeoutId = setTimeout(() => {
      this.fontSizeLoading.set(null);
      this.fontSizeTimeoutId = null;
    }, 300);
  }

  ngOnDestroy(): void {
    if (this.contrastTimeoutId) {
      clearTimeout(this.contrastTimeoutId);
    }
    if (this.fontSizeTimeoutId) {
      clearTimeout(this.fontSizeTimeoutId);
    }
    if (this.widgetAnimationTimeoutId) {
      clearTimeout(this.widgetAnimationTimeoutId);
    }
  }
}