// const app = Vue.createApp({
//   data(){
//     return{
//       product : "Football"
//     }
//   }
// })


const App = {
  data() {
    return {
      cart : 0,
      NameOfPro : "HeadSet",
      description : "Easily one of the best headsets we've ever used,  " ,
      image : './Assets/jbl.jpg' ,
      instock : 11,
      // onsale : true,
      details :["Highquality audio", "High bass" , "Noise cancelling"],
      varients : [
                  {id :123 , type : 'Headset' , image : './Assets/jbl.jpg' },
                  {id :143 , type : 'Headphone', image : './Assets/Sony.jpg'}
      ],
      sizes : [ "L" , "M" , "S" ]
      
    }
  },
  methods : {
    addToCart : function(){
      this.cart++
      // console.log("added to cart");
    },
    updateImg : function(varientImage){
      // console.log("update");
      this.image= varientImage
      // console.log(this.image);
    },
    removeToCart : function(){
      if(this.cart >0) {
        this.cart--
      } 
      
    }
  }
}
 

Vue.createApp(App).mount('#app')




// const Nowy = {
//   data() {
//     return {
//       counter: 1,
//       product : 'football'
//     }
//   }
// }

// Vue.createApp(Nowy).mount('#newone')