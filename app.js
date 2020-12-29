const app ={
    data(){
    return{
        title : "which one do you prefer ?" ,

        products :[
                
                {title : "lenovo", brand : "Lenovo" ,  url: "./assets/lenovo.jpg" , isFav : true },
                {title : "mac" , brand : "Apple" , url: "./assets/mac.jpg" ,      isFav : false },
                {title : "HP" ,  brand : "HP" ,    url: "./assets/hp.jpg" , isFav : false },
                {title : "rog" , brand : "Asus" ,  url: "./assets/ROG-Strix.jpg" , isFav : false },
                {title : "G5"  , brand : "Dell" ,  url: "./assets/G5.jpg" ,        isFav : false },
                {title : "msi" , brand : "MSI" ,   url: "./assets/ge65.jpg" ,      isFav : false }
        ]
    
    }
    }, 
    methods: {
        addtoFav(product){
                
                    product.isFav = !product.isFav
                 
        }
},
computed :{
    filteredlaptops(){
        return this.products.filter(function(itm){
                return itm.isFav
        });
    }
}
};

Vue.createApp(app).mount('#app')



