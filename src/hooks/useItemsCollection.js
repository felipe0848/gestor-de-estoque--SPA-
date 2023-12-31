import { useState } from "react";

export default function useItemsCollection() {
  const [itemsInStock, setItemsInStock] = useState(() => {
    const items = localStorage.getItem("items-storage");
    if (items) return JSON.parse(items);
    return [];
  });

  const saveItem = ({ itemId, name, qtd, price, category, description }) => {
    if (!itemId) {
      const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      let randomString = "";

      for (let i = 0; i < 32; i++) {
        const randomChar = Math.floor(Math.random() * chars.length);
        randomString += chars.substring(randomChar, randomChar + 1);
      }
      // randomString = qyqp9tkddfb07etr8tc1iiqbcytj63t3
      // id = qyqp9tkd-dfb0-7etr-8tc1-iiqbcytj63t3
      const id =
        randomString.substring(0, 8) +
        "-" +
        randomString.substring(8, 12) +
        "-" +
        randomString.substring(12, 16) +
        "-" +
        randomString.substring(16, 20) +
        "-" +
        randomString.substring(20, 32);

      const createAt = new Date();
      const updateAt = new Date();

      const item = {
        id,
        name,
        qtd,
        price,
        category,
        description,
        createAt,
        updateAt,
      };
      setItemsInStock((itemsInStock) => {
        const itemsArray = [item, ...itemsInStock];
        localStorage.setItem("items-storage", JSON.stringify(itemsArray));
        return itemsArray;
      });
    } else {
      const itemIndex = itemsInStock.findIndex(
        (current) => current.id === itemId
      );
      itemsInStock[itemIndex].name = name;
      itemsInStock[itemIndex].qtd = qtd;
      itemsInStock[itemIndex].price = price;
      itemsInStock[itemIndex].category = category;
      itemsInStock[itemIndex].description = description;
      itemsInStock[itemIndex].updateAt = new Date();

      localStorage.setItem("items-storage", JSON.stringify(itemsInStock));
    }
  };

  const removeItem = (id) => {
    if (confirm("Tem certeza que deseja apagar esse item?")) {
      setItemsInStock((itemsInStock) => {
        const itemsArray = itemsInStock.filter((item) => item.id !== id);
        localStorage.setItem("items-storage", JSON.stringify(itemsArray));
        return itemsArray;
      });
    }
  };

  return { itemsInStock, saveItem, removeItem };
}
