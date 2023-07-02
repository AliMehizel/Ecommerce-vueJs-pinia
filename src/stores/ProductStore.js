import { defineStore } from 'pinia'




export const useProductStore = defineStore('product',{
    state: ()=>{
        return{
            products:[],
            loading: false,
            error: null
        }
    },
    getters:{
        filterByCtr(ctgr){
            let data = this.products.filter(product => product.category === ctgr)
            console.log(data)
            return data
        }
    },
    actions:{
        async getProduct(){
            this.loading = true 
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            this.products = data
            this.loading = false
           

        }
    }
})