new Vue({el:"#app",data:{searchline:""},methods:{_getProducts:function(n){return fetch(n).then((function(n){return n.json()})).catch((function(n){console.log(n)}))},_postProducts:function(n,t){return fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})).catch((function(n){console.log(n)}))},_putProducts:function(n,t){return fetch(n,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})).catch((function(n){console.log(n)}))},_deleteProducts:function(n,t){return fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(n){return n.json()})).catch((function(n){console.log(n)}))}},mounted:function(){console.log(this.$root.$refs)}});