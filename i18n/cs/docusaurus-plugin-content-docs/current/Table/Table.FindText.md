---
title: Table.FindText
---

# Table.FindText


## Description

Vrátí všechny řádky, které obsahují daný text v tabulce.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Vrátí řádky v tabulce <code>table</code>, které obsahují daný text <code>text</code>. Pokud text není nalezen, vrátí se prázdná tabulka.


## Examples

### Example #1 
Nalezne řádky v tabulce, které obsahují text Bob.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
