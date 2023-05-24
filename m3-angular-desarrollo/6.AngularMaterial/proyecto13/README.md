
# Angular: Angular Material

ng new proyecto13 --routing=false --skip-git --style=css

ng add @angular/material
ng add @angular/material -y
ng add @angular/material -y --theme=indigo-pink --typography=true --animations=true

ng generate component user-list

ng generate component user-dir

ng generate interface user-dir/user --type=model --prefix=I

ng generate component user-detail

ng generate component periodic-elements
ng generate interface periodicElement --type=model --prefix=I

ng generate component user-table


## Personalización

### Estilos CSS

* ``styles.css`` añadimos css global para toda la aplicación
* Aquello que sea exclusivo de un componente se agrega en el CSS de ese propio componente.
* Otra opción sería reemplazar el tema de Angular Material en angular.json
* Añadir un nuevo archivo css en angular.json similar a styles.css

### Tipografía

Al seleccionar que queremos tipografía en Angular Material ya se añade en index.html:

```  html
<link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```



