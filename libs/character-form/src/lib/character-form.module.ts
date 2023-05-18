import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { CharacterFormContainerComponent } from './containers/character-form-container/character-form-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CharacterFormComponent, CharacterFormContainerComponent],
})
export class CharacterFormModule {}
