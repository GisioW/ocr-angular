import {Component} from '@angular/core';

@Component({
  template : `
    <div class="container">
        <div class="aler alert-danger text-center">
          <h2>Erreur 404</h2>
          <p>La page que vous cherchez n'existe pas !</p>
        </div>
    </div>`

})

export class NotFoundComponent{
}
