import { useState, useEffect } from "react";

const useTransaction = () => {
  const [transactionNr, setTransactionNr] = useState("");

  useEffect(() => {
    // random transactionNr creation - 2 Letters + 10 numbers
    let newTransactionNr = "";
    const arrLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * 10); //random nr from 0 -9
      newTransactionNr += arrLetters[index];
    }

    const arrNr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * 10);
      newTransactionNr += arrNr[index];
    }

    setTransactionNr(newTransactionNr);
  }, []); // empty dependency array to run only once on mount

  return { transactionNr };
};

export default useTransaction;
