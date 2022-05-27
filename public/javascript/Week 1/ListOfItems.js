class ListOfItems
{
    array = ["Car", "Machine", "House"];

    constructor(item)
    {
        this.item = item;
    }
    getList()
    {
        return this.array;
    }
    addItemIntoList()
    {
        this.array.push(this.item)
    }
}

list = new ListOfItems(item);
add = list.addItemIntoList();
document.getElementById("list").innerHTML = list.getList();
