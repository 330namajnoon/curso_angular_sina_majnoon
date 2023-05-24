
## Angular Material + Enrutado + Servicio


ng new proyecto14 --routing --skip-git --style=css

cd proyecto14

ng add @angular/material -y --theme=indigo-pink --typography=y

ng generate component comment-list
ng generate component comment-detail
ng generate interface models/comment --type=model --prefix=I
ng generate service services/comment


