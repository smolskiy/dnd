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
import { CharacterFormContainerComponent } from '@dnd-masters/character-form';

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
      class: CharacterFormContainerComponent,
    },
    {
      name: 'Component2',
      class: CharacterFormContainerComponent,
    },
    {
      name: 'Component3',
      class: CharacterFormContainerComponent,
    },
    {
      name: 'Component4',
      class: CharacterFormContainerComponent,
    },
    {
      name: 'Component5',
      class: CharacterFormContainerComponent,
    },
  ];

  constructor(private readonly applicationRef: ApplicationRef) {}

  public componentClicked(item: ComponentItem): void {
    const component = createComponent(item.class, {
      environmentInjector: this.applicationRef.injector,
    });
    this.selectedComponent.clear();
    this.selectedComponent.insert(component.hostView);
  }
}
