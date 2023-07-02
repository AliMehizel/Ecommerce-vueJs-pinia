import { defineStore } from 'pinia'




export const useCart = defineStore('cart',{
    state: ()=>{
        return{
            cart:[],
        }
    },
    actions:{
        addItem(item){
            console.log(item)
            this.loading = true
            this.cart.push(item)
            this.loading = false 
        },
        deleteItem(id){
            this.cart = this.cart.filter(c => {
                return c.id != id
            })
        }

    }
})