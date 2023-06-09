import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { EditorialsModule } from './editorials/editorials.module';
import { LocationsModule } from './locations/locations.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [DatabaseModule, BooksModule, AuthorsModule, EditorialsModule, LocationsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
