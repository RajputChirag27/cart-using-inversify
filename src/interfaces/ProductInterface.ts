import mongoose, { Document } from 'mongoose'

export interface Product extends Document {
<<<<<<< HEAD
  name: string
  description: string
  price: number
  image: string
}
=======
    name: string;
    description: string;
    price: number;
    image: string;
    productType : string;
}
>>>>>>> 34c26481177ac940965435da8d58750010be1e28
