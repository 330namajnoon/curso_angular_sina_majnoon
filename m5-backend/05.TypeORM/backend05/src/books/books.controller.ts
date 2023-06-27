import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get('id/:id')
    findById(@Param("id") id: number): Promise<Book | null> {
        return this.bookService.findById(id);
    }

    @Get('title-eq/:title') // http://localhost:3000/books/title-eq/book1
    findAllByTitleEquals(@Param("title") title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleEquals(title);
    } 

    @Get('title-like/:title') // http://localhost:3000/books/title-like/libro
    findAllByTitleLike(@Param('title') title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleLike(title);
    }

    @Get('price/min/:min/max/:max')
    findAllByPriceBetween(
        @Param('min') min: number, 
        @Param('max') max: number): Promise<Book[]> {
        return this.bookService.findAllByPriceBetween(min, max);
    }

    @Get('published')
    findAllByPublishedTrue(): Promise<Book[]> {
        return this.bookService.findAllByPublishedTrue();
    }

    @Get('quantity/:quantity/price/:price')
    findAllByQuantityAndPrice(
        @Param('quantity') quantity: number,
        @Param('price') price: number): Promise<Book[]> {

            return this.bookService
            .findAllByQuantityAndPrice(quantity, price);
    }
    
    @Get('ordered-by-price-asc')
    findAllOrderByPriceAsc(): Promise<Book[]> {
        return this.bookService.findAllOrderByPriceAsc();
    }

    /*
    Cambiar ISBN:

        {
        "id": 0,
        "title": "libro postman",
        "isbn": "111111111",
        "price": "2.45",
        "quantity": 50,
        "published": false
    }
    */
    @Post()
    async create(@Body() book: Book): Promise<Book> {
        return await this.bookService.create(book);
    }
    

    @Put()
    async update(@Body() book: Book): Promise<Book> {
        return await this.bookService.update(book);
    }



    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number
    ): Promise<void> {
        return await this.bookService.deleteById(id);
    }


}
