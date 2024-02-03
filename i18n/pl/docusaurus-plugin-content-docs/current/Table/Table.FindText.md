---
title: Table.FindText
---

# Table.FindText


## Description

Zwraca wszystkie wiersze z tabeli, które zawierają dany tekst.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Zwraca wiersze z tabeli <code>table</code>, które zawierają tekst <code>text</code>. Jeśli tekst nie zostanie znaleziony, zostanie zwrócony pusty tekst.


## Examples

### Example #1 
Znajdź w tabeli wiersze zawierające tekst „Bob”.
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
