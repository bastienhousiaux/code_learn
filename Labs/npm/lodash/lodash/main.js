let _=require("lodash");




let lodashExample={


    /**
     * ARRAYS
     */

     //_.chunk(array, [size=1]):array
    // créé un array contenant des sous array de taille [size] contenant les éléments du tableau dans l'ordre
     chunk:function(){
        console.log(_.chunk([1,2,3,4],2));//[[1,2],[3,4]]
     },

    //_.compact(array):array
    //retourne un tableau sans valeur fausse ( false, null, 0, "", undefined et NaN)
    compact:function(){
        console.log(_.compact([1,null,2,false,3]));//[1,2,3]
    },

    //_.add(a,b) returns a+b
    add:function(){
        console.log(_.add(6,4));//10
    },

    //_.after(nbCall,func) returns a callback that will call func only on the n call and further
    after:function(){
        var callFooAfter3Calls=_.after(3,function(){
            console.log("foo");
        });
        callFooAfter3Calls();
        callFooAfter3Calls();
        callFooAfter3Calls();//first time foo is called
    },

    array:function(){
        console.log("require(lodash/array) to get array related func cherry picked");
    },

    // _.ary(func,nbArgsAccepted) create a wrapper for func that limits the number of args 
    //passed to it
    ary:function(){
        var capedArgsFunc=_.ary(function(a,b,c){
            console.log(a,b,c);
        },1);
        capedArgsFunc(1,2,3); //1 undefined undefined
    },

    //assign(obj1,obj2,...) set all prop on obj1 to obj2,3,4,... values and returns obj1
    //last values overwritte previous values
    assign:function(){
        var objA={
            a:5,
            b:10
        }
        var objB={
            a:7,
            c:14
        }
        var objC={
            c:3,
            d:9
        }
        
        
        console.log(_.assign(objA,objB,objC));//{a:7,b:10,c:3,d:9}
        console.log(objA);//{a:7,b:10,c:3,d:9}
        console.log(objB);//unchanged
        console.log(objC);//unchanged
    }
}




lodashExample.compact();

