
class Item{
    static lasId = 0
 
   constructor(text){
       this.id = Item.lastId++
       this.text = text
       this.done = false
   }
}
 
export default Item