---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Vytvoří skalární funkci nad vektorovou funkcí, dávkuje se více volání.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Vrátí skalární funkci typu <code>scalarFunctionType</code>, která volá <code>vectorFunction</code> s jedním řádkem argumentů a vrátí jeden výstup. Kromě toho, když je tato skalární funkce opakovaně použita pro každý řádek tabulky vstupů, například v Table.AddColumn, použije se místo toho <code>vectorFunction</code> jednou pro všechny vstupy.<br /><code>vectorFunction</code> se předá jako tabulka, jejíž sloupce odpovídají názvu a pozici parametrů v <code>scalarFunctionType</code>. Každý řádek v této tabulce obsahuje argumenty pro jedno volání dané skalární funkce se sloupci odpovídajícími parametrům v <code>scalarFunctionType</code>.<br /><code>vectorFunction</code> musí vrátit seznam stejné délky jako vstupní tabulka a položky tohoto seznamu na každé pozici musí být stejný výsledek, jaký by přineslo vyhodnocení skalární funkce na vstupním řádku na stejné pozici.<br />Očekává se, že vstupní tabulka bude dodána streamem, takže se očekává, že <code>vectorFunction</code> bude streamovat svůj výstup průběžně s tím, jak bude přicházet vstup. Vždy se bude současně pracovat jen s jedním blokem dat. Především nesmí <code>vectorFunction</code> provést výčet vstupní tabulky více než jednou.<br />



## Category
Function
