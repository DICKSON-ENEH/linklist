const n1= {
    data:300
}
const n2 = {
    data:500
}

n1.next =n2
console.log(n1)
class node {
    constructor(data, next = null){
        this.data=data;
        this.next=next;
    }
}


class linkedlist {
    constructor(){
        this.head=null;
        // this.tail=null;
    }
}
insert(data){
    this.head= new node (data, this.head);
}







const linking = new linkedlist()
 
linking.insert("star")

console.log(linking)




