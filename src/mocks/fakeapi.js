const productos = [


    {
        id: '01',
        name: 'La Guerra de los Mundos',
        categoria: 'Ficcion',
        costo: '$1.000',
        autor: 'H. G. Welles',
        stock: 10,
        img: 'https://th.bing.com/th/id/R.0484cc27a14ee673b6ae673d5b236be8?rik=%2b6M9sX01oQOvcQ&pid=ImgRaw&r=0',
    },
    {
        id: '02',
        name: 'Winnieh-The Pooh',
        categoria: 'Infantil',
        costo: '$1.500',
        autor: 'A. A. Milne',
        stock: 10,
        img: 'https://th.bing.com/th/id/R.4d4229979e5080c334b323d896285fe1?rik=ZiOAK1ojzuW2PQ&riu=http%3a%2f%2fimage.casadellibro.com%2flibros%2f0%2fwinnie-the-pooh-el-pequeno-rito-9788444169064.jpg&ehk=dU%2fH1DNMyWgLnvJkDEWHVn5KmRJw6BSDqc%2bT%2bMamYRQ%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id: '03',
        name: 'Estudio en Escarlata',
        categoria: 'Policial',
        costo: '$1.200',
        autor: 'Arthur Conan Doyle',
        stock: 10,
        img: 'https://th.bing.com/th/id/R.0484cc27a14ee673b6ae673d5b236be8?rik=%2b6M9sX01oQOvcQ&pid=ImgRaw&r=0',
    }
]

export const getData = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(productos)
        } else {
            reject('salio mal')
        }
    }, 2000)
})