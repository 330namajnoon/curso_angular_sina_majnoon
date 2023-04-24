interface Movie {
    id: number;
    title: string;
    year:number;
    director:string;
    duration: number;
    genetes: string[];
    rate:number;
}

class MovieDatabase {
    private movies:Movie[] = [];
    insertar(newMovie: Movie):void {
        this.movies.push(newMovie);
    }
    actualizar(id:number,newData:Movie):void {
        this.movies.forEach(m => {
            if(m.id == id) m = newData; 
        })
    }
    borrar(id:number):void {
        this.movies = this.movies.filter(m => m.id !== id);
    }
    generateNextId():number {
        let newId:number; 
        if(this.movies.length > 0) {
            newId = this.movies[this.movies.length-1].id + 1
        }else{
            newId = 0;
        } 
        return newId
    }
    consultar(id:number):any {
        let m_:any;
        this.movies.forEach(m => {
            if(m.id == id) {
                m_ = m;
            }
        })
        if(!m_) {
            m_ = "no existe";
        }

        return m_;
    }
}

export {MovieDatabase,Movie};