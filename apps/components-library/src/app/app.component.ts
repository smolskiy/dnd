import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  createComponent,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from '@dnd-masters/character-form';

export interface ComponentItem {
  name: string;
  class: Type<unknown>;
}
@Component({
  standalone: true,
  selector: 'dnd-masters-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild('selectedComponent', { read: ViewContainerRef, static: true })
  selectedComponent!: ViewContainerRef;

  public data: ComponentItem[] = [
    {
      name: 'Component1',
      class: CharacterFormComponent,
    },
    {
      name: 'Component2',
      class: CharacterFormComponent,
    },
    {
      name: 'Component3',
      class: CharacterFormComponent,
    },
    {
      name: 'Component4',
      class: CharacterFormComponent,
    },
    {
      name: 'Component5',
      class: CharacterFormComponent,
    },
  ];

  constructor(private readonly applicationRef: ApplicationRef) {}

  public componentClicked(item: ComponentItem): void {
    console.log('test');
    const component = createComponent(item.class, {
      environmentInjector: this.applicationRef.injector,
    });
    this.selectedComponent.clear();
    this.selectedComponent.insert(component.hostView);
  }
}
