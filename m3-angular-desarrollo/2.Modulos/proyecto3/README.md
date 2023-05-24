
# Comandos Angular 


## Módulo tasks

1. Modulo tasks

ng generate module tasks

2. Componente task-list: Listado de tareas

ng generate component tasks/task-list

3. Componente task-detail: Detalle de una tarea

ng generate component tasks/task-detail

4. Crear task.model.ts con interfaz ITask

5. Completar el componente task-list

6. Completar el componente task-detail

7. Agregar exports en el tasks.module.ts

8. Importar TasksModule en imports de app.module.ts

9. En html de app.component.html ya podemos usar los componentes de tareas

## Módulo usuarios

1. Módulo users

ng generate module users
ng g m users

2. Componentes

ng generate component users/user-detail
ng generate component users/user-form

Hacer el código de los componentes.

3. exports e imports

4. app.component.html



# Pasos

1. Crear proyecto3
2. Crear módulo 1: users
   1. Crear componente users/user-list
   2. Crear componente users/user-form
3. Crear módulo 2: tasks
   1. Crear componente tasks/task-list
   2. Crear componente tasks/task-detail


Distinguir módulos:

* app.module.ts: AppModule
* users.module.ts: UsersModule
* tasks.module.ts: TasksModule

Distinguir componentes:

* app.component.ts: AppComponent
* user-detail.component.ts: UserDetailComponent
* user-form.component.ts: UserFormComponent
* task-list.component.ts: TaskListComponent
* task-detail.component.ts TaskDetailComponent