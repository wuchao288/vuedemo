

var vm=new Vue({
   el:'#app',
   data:{
        checkedCount:0,
        checked:false,
        list:[
            {
                id:1,
                name:'iphone 7',
                price:6188,
                count:1,
                checked:false
            },
            
            {
                id:2,
                name:'iphone X',
                price:5188,
                count:1,
                checked:false
            },
            
            {
                id:3,
                name:'iphone Pro',
                price:6588,
                count:1,
                checked:false
            },
            
            {
                id:4,
                name:'MacBook Pro',
                price:8188,
                count:1,
                checked:false
            }
        ]
   },
   methods: {
    handleReduce:function(index){
       if(this.list[index].count===1){
             return;
       }
       this.list[index].count--;
    },
    handleAdd:function(index){
        this.list[index].count++;
    },
    handleRemove:function(index){
        this.list.splice(index,1);
    },
    checkall:function(){
        console.info(this.checked);
        var self=this;
        this.list.forEach(function(item){
                console.info(vm.checked);
                item.checked=!vm.checked;
                if(item.checked==false){
                    this.checkedCount--;
                }else{
                    this.checkedCount++;
                }
        });
        console.info(this.checkedCount);
    },
    checkItem:function(index){
          this.list[index].checked=!this.list[index].checked;
          if(this.list[index].checked==true){
               this.checkedCount++;
          }else{
              this.checkedCount--;
          }
          console.info(this.checkedCount);
          this.checked=this.checkedCount==this.list.length;
          console.info(this.checked);
    }
   },
   mounted:function(){

  },
   computed: {
        getChecked:function(){
           
        },
       totalPrice:function(){
           var total=0;
           for (let index = 0; index < this.list.length; index++) {
               const element = this.list[index];
               if(element.checked==false){
                    continue;
               }
               total+=element.price*element.count;
           }
           return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
       }       
   }
});