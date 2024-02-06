---
title: Table.ColumnNames
---

# Table.ColumnNames


Retourneert de kolomnamen als een lijst.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Retourneert de kolomnamen uit de tabel <code>table</code> als een lijst met tekst.


## Examples

### Example #1 
De kolomnamen van de tabel zoeken.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
