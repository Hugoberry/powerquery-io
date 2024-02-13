---
title: Table.RowCount
---

# Table.RowCount


Gibt die Anzahl von Zeilen in der Tabelle zurück.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Remarks

Gibt die Anzahl von Zeilen im Element vom Typ "<code>table</code>" zurück.


## Examples

### Example #1 
Ermittelt die Anzahl von Zeilen in der Tabelle.
```powerquery
Table.RowCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
