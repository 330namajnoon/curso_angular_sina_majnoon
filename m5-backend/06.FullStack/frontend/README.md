
# Frontend con Angular

https://www.typescriptlang.org/docs/handbook

https://www.typescriptlang.org/docs/handbook/utility-types.html

ng generate component layout/navbar
ng generate component layout/footer

ng generate module books --routing --module app.module
ng generate component books/book-list
ng generate component books/book-gallery
ng generate component books/book-detail
ng generate component books/book-form
ng generate interface books/models/book --type=model --prefix=I
ng generate service books/services/book

ng generate module shared
ng generate pipe shared/LimitLongText
Importar SharedModule en BookModule

ng generate module authors --routing --module app.module
ng generate interface authors/models/author --type=model --prefix=I
ng generate service authors/services/author

ng generate module categories --routing --module app.module
ng generate interface categories/models/category --type=model --prefix=I
ng generate service categories/services/category

ng generate component authors/author-detail


## Autenticación

Módulo auth:
* ng generate module auth --routing --module app.module
* ng generate service auth/auth
* ng generate component auth/login
* ng generate component auth/register
* Crear JwtInterceptor

Módulo users:
* ng generate module users --routing --module app.module
* ng generate interface users/user --type=model --prefix=I
* ng generate service users/user
* ng generate component users/profile




## Login 

* Crear método login en AuthService

* Crear componente auth/login

* Añadir formulario reactivo en login.component.ts y login.component.html

* En el método save() de login.component.ts llamar a AuthService login y comprobar que se recibe el token como respuesta.

* Almacenar el token en localStorage.

En Postman:

* Authorization tiene que estar a No Auth

Una vez hecho el login, el resto de peticiones a otros controladores:

* Authorization tiene que estar a Bearer token

## Utilizar token en cabecera Authorization en las peticiones al backend

ng generate interceptor auth/jwt

Crear JwtInterceptor implements HttpInterceptor

Tiene un método intercept que hay que rellenar con código para extraer el token y agregarlo en la cabecera Authorization de la request.

auth.module.ts en providers agregar el JwtInterceptor, con multi:true.

Lo que se debe comprobar es que cuando se lanza una nueva petición, por ejemplo listado books, en la consola Network, en cabeceras de la petición aparece Authorization Bearer token.

## Registro

ng generate component auth/register

register.component.ts:
* crear el userForm
* crear el método save() que llame a register de AuthService

register.component.html:
* username
* email
* password

## Cerrar sesión o logout

* Añadir botón logout en barra de navegación

* Crear método logout en AuthService

## Personalizar vistas en base a si se está autenticado

Crear método isLoggedIn() en AuthService para comprobar si existe token.

Agregar public authService: AuthService en navbar.component.ts

Ya podemos añadir ngIf="authService.logout" o ngIf="authService.isLoggedIn()"

## Personalizar vistas en base a roles

Instalar jwt-decode: https://github.com/auth0/jwt-decode

npm install jwt-decode

En AuthService crear métodos para comprobar roles, para lo cual deben descodificar el token jwt utilizando el método jwt_decode()

isAdmin()
isCompany()

Cosas que solo puede ver el administrador:

* En la barra de navegación puede haber un menú libros con un botón Crear libro
* En la barra de navegación menú usuarios
* En el listado libros el botón Crear libro

Optimización:

Utilizar Subject/BehaviourSubject y subscription para suscribirse a la comprobación de si el usuario está logado y es administrador.

De esa forma evitaríamos que Angular haga un exceso de comprobaciones de isLoggedIn o isAdmin.

https://rxjs.dev/guide/subject

1. AuthService:
  * Atributo isAdmin
  * Atributo isLoggedIn

  * logout cambiar isAdmin y isLoggedIn a false

  * hasToken comprueba si hay token si o no

  * handleLoginResponse guarda el token, comprueba el rol, marca isLoggedIn a true para indicar que el usuario está autenticado.


2. navbar.component.ts y book-list.component.ts
  * implements NgOnit
  * Añadir authService en constructor
  * subscribe de isAdmin
  * subscribe de isLoggedIn


3. navbar.component.html

  * ngIf="isAdmin"
  * ngIf="isLoggedIn"

4. login.component.ts y register.component.ts
* Llamar a handleLoginResponse



## Convertir el identificador jwt_token en una constante 

Crear archivos de constantes.

En Angular:

* shared/constants.ts

En Nest:

* shared/constants.ts

Ejemplos de lo que se podría guardar en constantes:

* URL del backend
* Mensajes de error genéricos
* Palabras que se repitan más de 3-5 veces
* Números fijos o constantes utilizados fórmulas para hacer cálculos

## Módulos reservas

1. Generar módulo y componentes:

ng generate module bookings --routing --module app.module
ng generate component bookings/booking-list
ng generate component bookings/booking-form
ng generate interface bookings/booking --type=model --prefix=I
ng generate service bookings/booking


2. Crear routes para reservas
* app-routing.module.ts /bookings BookingsModule
* bookings-routing.module.ts
  * '' BookingListComponent
  * ':bookId/new' BookingFormComponent
  * '/:id/edit' BookingFormComponent

3. Modelo booking.model.ts:

* id
* user?: IUser
* book?: IBook
* price
* startDate
* finishDate

## Formulario reservas

Frontend

1. Importar módulos de angular material
en módulo reservas.

2. booking.service.ts agregar métodos CRUD.

3. booking-form.component.ts agregar FormGroup con FormControl por cada campo

4. booking-form.component.html agregar campos de formulario

5. book-detail.component.html routerLink en el botón de compra hacia el formulario de booking-form.component.ts


Backend:

* Enviar datos a BookingController
* Extraer usuario de la request y asociarlo a la reserva

## Mis reservas (user) y Todas las reservas (admin)

Backend:

En BookingsController:

Extraer user de req.user y si es admin:
  * llamar a BookingsService.findAll()

Si no es admin:
* Extaer req.user.id y llamar a BookingsService.findAllByUserId(id)


Frontend:

bookings-list.component.ts en ngOnInit llama a BookingsService.findAll() y carga bookings

bookings-list.component.html forEach y mostrar bookings

## Perfil de usuario

En frontend:

* ng generate module users --routing --module app.module
* ng generate interface users/user --type=model --prefix=I
* ng generate service users/user

* ng generate component users/profile
* ng generate component users/user-list


1. ✅ En app-routing.module.ts agregar ruta al módulo UsersModule
2. ✅ En users-routing.module.ts agregar rutas a componentes
3. ✅ Agregar imports en users.module.ts
4. ✅ Crear métodos en UserService
5. ✅ Completar user.model.ts
6. ✅ profile.component.ts
7. ✅ profile.component.html
8. ✅ profile.component.css
9. ✅ Añadir menú Mi perfil en navbar

En Backend:

1. Recibir user en controlador
2. Guardar user en base de datos

## Ocultar botones si no se está autenticado

Ocultar botones o hacer redirección a login


## Subida de imagen

Frontend:

ng generate component users/avatar

* users-routing.module.ts agregar ruta a AvatarComponent
* Navbar botón /users/avatar

avatar.component.ts:

* onFileSelected()
* save()

avatar.component.html:
* input type="file"

Una vez completada la subida de imágenes en backend y sabiendo que las imágenes se pueden servir con una url como:

http://localhost:3000/uploads/00eb9a5b-3fa5-446a-b175-c6df5becb5f0.png

AvatarComponent vamos hacer que muestre la imagen de avatar el usuario (si la tiene).

Para ello hay que implementar OnInit y traer el usuario con el avatar.

Una vez se sube la imagen, se resetea en el ts y html la imagen recargando el usuario de nuevo.

## Subida múltiple de imágenes

1. ng generate component books/book-form-images

2. Detalle de un book (book-detail.component.html y ts) que haya un botón que te lleve a un componente para subir imágenes para ese libro: book-form-images.component.ts

3. book-form-images.component.ts: métodos ngOnInit, onFileSelected, save

4. book-form-images.component.ts: mostrar imágenes de book y permitir actualizarlas

5. modelo book en frontend y backend, debería tener un atributo nuevo array images de tipo string.

## Proteger rutas

## Conectar con otros backend desde nuestro backend con httpclient

