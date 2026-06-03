---
title: Table.SelectRows
---

# Table.SelectRows


Wählt die Zeilen aus, die die Bedingungsfunktion erfüllen.


## Syntax

```powerquery
Table.SelectRows(
    table as table,
    condition as function
) as table
```


## Remarks

Gibt eine Tabelle mit Zeilen aus dem Element vom Typ "`table`" zurück, das der Auswahl "`condition`" entspricht.


## Examples

### Example #1
Auswählen der Zeilen in der Tabelle, in denen die Werte in der Spalte "\[CustomerID\] " größer als 2 sind.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] > 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2
Auswählen der Zeilen in der Tabelle, in denen die Namen keinen Buchstaben "B" enthalten.
```powerquery
Table.SelectRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each not Text.Contains([Name], "B")
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
