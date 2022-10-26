export class persona {
    id?: number
    nombre: String;
    apellido: String;
    titulo: String;
    banner: String;
    foto: String;
    descripcion: String 
    constructor(nombre: String, apellido: String, titulo: String, banner: String, foto: String, descripcion: String ){
        this.nombre = nombre;
        this.apellido=apellido;
        this.titulo=titulo;
        this.foto = foto;
        this.descripcion = descripcion;
        this.banner = banner;
        }
}
export class educacion {
    id?: number
    titulo: String;
    establecimiento: String;
    inicio: String;
    fin: String;
    logo: String;
    descripcion: String 
    constructor(titulo: String, establecimiento: String, inicio: String, fin: String, logo: String, descripcion: String ){
        this.titulo = titulo;
        this.establecimiento=establecimiento;
        this.inicio=inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.logo = logo;
        }
}
export class experiencia {
    id?: number
    posicion: String;
    empresa: String;
    inicio: String;
    fin: String;
    logo: String;
    descripcion: String 
    constructor(posicion: String, empresa: String, inicio: String, fin: String, logo: String, descripcion: String ){
        this.posicion = posicion;
        this.empresa = empresa;
        this.logo= logo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion ;
        }
}

export class habilidades {
    id?: number
    nombre: String;
    logo: String;  
    constructor(nombre: String, logo: String){
        this.nombre = nombre;
        this.logo = logo;
        }
}

export class proyectos {
    id?: number
    nombre: String;
    imagen: String;
    linkSitio: String;
    linkCodigo: String;
    descripcion: String 
    constructor(nombre: String, imagen: String, linkSitio: String, linkCodigo: String, descripcion: String ){
        this.nombre = nombre;
        this.imagen = imagen;
        this.linkSitio = linkSitio;
        this.linkCodigo = linkCodigo;
        this.descripcion = descripcion ;
        }
}