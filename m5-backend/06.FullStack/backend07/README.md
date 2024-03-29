
# Autenticación

npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

nest generate module auth

nest generate service auth

nest generate controller auth


## Login (genera token): 

1. AuthService
    * login: si todo ok se firma con una clave secreta

2. AuthModule:
    * ajustar imports: UsersModule, PassportModule, JwtModule
    * ajustar providers: AuthService, JwtStrategy

3. AuthController:
    * login que recibe un LoginDTO por @Body() por @Post

4. Abrir Workbench y añadir un usuario en la tabla user si no lo hay.

5. Abrir postman y enviar por POST a http://localhost:3000/auth/login

{
    "email": "user1@gmail.com",
    "password": "1234"
}

Ejemplo de respuesta que tiene que devolver: 

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsInN1YiI6MSwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODg0NTczNzYsImV4cCI6MTY4OTA2MjE3Nn0.OulRne6T5V0cQTQhVKqrVEYjnY-ArgMnSSc71bvYp44"
}

Añadir el token en jwt.io y ver que descodifica la información que tiene dentro.

## Verificar tokens en las sucesivas peticiones


1. Crear archivo jwt.strategy.ts en el módulo auth

2. Crear dentro la clase JwtStrategy
    * extends PassportStrategy(Strategy) 
    * constructor con llamada a super()
    * método validate(payload)

3. Añadir la clase JwtStrategy en providers del módulo auth

4. AuthController crear métodos:
    * hola1 sin seguridad
    * hola2 con seguridad: @UseGuards(AuthGuard('jwt'))
    * getProfile que extrae el user de la @Request
    * A partir de ahora podemos extraer el user de la @Request


Desde Postman:

5. Enviar el token desde Postman en una petición a un controlador cualquiera como por ejemplo auth/hello2:

Authorization > Bearer Token > Pegar el token

Comprobar:

* auth/hola1 es público y no tiene seguridad, no necesita token

* auth/hola2 es seguro y necesita token

* auth/profile es seguro y necesita token, devuelve el usuario, sin la contraseña.


## Registro

* AuthController
    * register que recibe un User

* AuthService
    * register que crea el usuario y llama a login para devolver el token
    * Suele ser habitual agregar pasos extra en el registro como:
        * Enviar un SMS
        * Enviar un Email
        * Validar IP
        * Validar user agent

* UserService
    * create que guarda un usuario en base de datos, lanza excepción si los datos ya 
    están ocupados.


## Cifrado contraseña

bcrypt: https://github.com/kelektiv/node.bcrypt.js#readme

1. En el registro hay que cifrar la contraseña antes de guardarla en base datos

2. En el login hay que comprobar la contraseña cifrada


## Generar clave secreta segura

En el archivo secret-gen.js a nivel proyecto tenemos el código que genera claves.

Ejemplo:

8fed7b16f3e25645764e872dd64097052f4d4c6787e3d2aa0e760a51e606571a

Añadir la clave como variable de entorno y utilizarla en el backend.

process.env.NEST_JWT_SECRET


## Variable de entorno para la clave secreta

Agregar la variable de entorno NEST_JWT_SECRET.


## OpenAPI

npm install @nestjs/swagger

En main.ts:

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  Entrar en:

  http://localhost:3000/api


  ## Subida de imágenes

Backend:

1. npm install -D @types/multer

2. users.controller.ts crear método uploadAvatar()

3. Configurar carpeta destino en users.module.ts en imports añadiendo MulterModule.register({})

4. En user.model.ts añadir un campo avatarImage

5. En uploadAvatar() llamar a userService.updateAvatar() y guardar el avatar en un atributo del usuario

6. En userService crear updateAvatar, similar a update, pero que actualice solo el avatar.

7. main.ts y añadir una línea de código para que el backend pueda servir imágenes al frontend