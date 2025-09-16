import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  services = signal<Service[]>([
    {
      icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.508 19.64 2.25 15.184 2.25 10.5 2.25 5.816 4.508 1.36 7.5 1.36c2.992 0 5.25 4.456 5.25 9.14 0 4.684-2.258 9.14-5.25 9.14z',
      title: 'Talleres de Co-creación',
      description: 'Sesiones participativas donde padres, especialistas y niños colaboran en el diseño de experiencias sensoriales únicas y efectivas.'
    },
    {
      icon: 'M15.182 15.182a4.5 4.5 0 01-6.364 0M15.182 9.006a4.5 4.5 0 010 6.364L12 12.364l3.182-3.358zM12 12.364a4.5 4.5 0 010-6.364L8.818 5.636 12 8.636l3.182 3.728z',
      title: 'Terapias Individualizadas',
      description: 'Planes de intervención personalizados que utilizan el jardín sensorial para mejorar la regulación emocional y las habilidades motoras.'
    },
    {
      icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.928A9.09 9.09 0 009 18.72m-1.5-2.928a9.09 9.09 0 01-3.741-.479 3 3 0 014.682-2.72M6.309 15.691A9.09 9.09 0 019 12.75m6.309 2.941A9.09 9.09 0 009 12.75M15 6.091A9.09 9.09 0 009 3.25m6 2.841A9.09 9.09 0 019 3.25m-6 2.841A9.09 9.09 0 009 6.091',
      title: 'Apoyo y Capacitación Familiar',
      description: 'Cursos y talleres para padres y cuidadores, creando una comunidad de apoyo y fomentando la aplicación de técnicas en casa.'
    }
  ]);
}
