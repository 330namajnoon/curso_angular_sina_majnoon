
# Full Stack: Frontend con Angular + Backend con NestJS y TypeORM

## Backend

nest new backend07 --skip-git --package-manager npm
cd backend07
npm install --save @nestjs/typeorm typeorm mysql2

## Frontend

ng new frontend --routing --skip-git --style=css
cd frontend
ng add @angular/material -y --theme=indigo-pink

## TODOs

* [x] Copiar carpeta src de backend06 en backend07
* [x] Copiar carpeta src de proyecto1 en frontend
* [x] enableCors en main.ts backend para poder conectar frontend
* [x] Crear archivo db.sql en backend
* [ ] Comprobar modelos Angular y modelos NestJS
* [ ] Actualizar servicios Angular para conectar con controladores Nestjs
* [ ] Actualizar ts de componente
* [ ] Actualizar html
* [ ] Crear nuevos módulos/componentes en angular
* [ ] Autenticación: crear módulos auth en angular y nest
* [ ] Validaciones backend
* [ ] Imágenes
* [ ] Testing