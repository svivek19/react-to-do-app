import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import SearchItem from "./SearchItem";
import React from "react";



function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')))

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');



  const addItem = (item) => {
    const id = items?.length ? items?.[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItem = [...items, addNewItem];
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  const handleCheck = id => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItem)
    localStorage.setItem("todo_list", JSON.stringify(listItem))
  }

  const handleDel = id => {
    const listItem = items.filter((item) =>
      item.id !== id)
    setItems(listItem)
    localStorage.setItem("todo_list", JSON.stringify(listItem))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    else alert("hi");
    console.log(newItem);
    addItem(newItem)
    setNewItem('');
  }


  return (
    <div className="text-center">
      <Header title="To do List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items?.filter(item=>((item?.item).toLowerCase().includes(search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDel={handleDel}
      />
      <Footer
        length={items?.length}
      />
    </div>
  );
}
export default App;