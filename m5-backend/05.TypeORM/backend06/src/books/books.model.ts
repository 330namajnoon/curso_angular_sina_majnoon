import { Author } from "src/authors/authors.model";
import { Editorial } from "src/editorials/editorials.model";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({unique: true, length: 13})
    isbn: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;

    @CreateDateColumn({name: 'created_date'})
    createdDate: Date;

    @Column({type: 'int'})
    quantity: number;

    @Column({type: 'boolean', default: false})
    published: boolean;

    @ManyToOne(() => Author)
    @JoinColumn({ name: 'id_author'})
    author: Author;

    @ManyToOne(() => Editorial)
    @JoinColumn({ name: 'id_editorial'})
    editorial: Editorial;
}