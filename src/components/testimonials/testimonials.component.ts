import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      image: 'https://picsum.photos/seed/person1/100/100',
      name: 'Ana García',
      role: 'Madre',
      text: 'El Sendero Sensorial ha sido un cambio radical para mi hijo y nuestra familia. Por primera vez, siento que tenemos herramientas para entender su mundo. Es más que una terapia, es un lugar de conexión y alegría.'
    },
    {
      image: 'https://picsum.photos/seed/person2/100/100',
      name: 'Dr. Carlos Mendoza',
      role: 'Especialista en Desarrollo Infantil',
      text: 'La metodología de este proyecto es innovadora y muy necesaria. El enfoque en la co-creación y el diseño inclusivo permite obtener resultados que las terapias tradicionales a menudo no logran. Es un modelo a seguir.'
    },
     {
      image: 'https://picsum.photos/seed/person3/100/100',
      name: 'Laura Fernández',
      role: 'Madre',
      text: 'Aquí, mi hija no solo juega, sino que se comunica a su manera. Verla elegir las texturas y colores en el "Árbol de Gusto" nos ha dado una nueva forma de entender sus preferencias sin palabras. Estamos muy agradecidos.'
    }
  ]);
}
