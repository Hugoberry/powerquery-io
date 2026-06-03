---
title: Table.SingleRow
---

# Table.SingleRow


Gibt die einzelne Zeile in der Tabelle zurück.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Gibt die einzelne Zeile im einzeiligen Element vom Typ „`table`“ zurück. Enthält `table` mehr als eine Zeile, wird ein Fehler ausgelöst.


## Examples

### Example #1
Gibt die einzelne Zeile in der Tabelle zurück.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
