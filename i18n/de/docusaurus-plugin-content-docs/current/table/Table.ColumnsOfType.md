---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Gibt eine Liste mit den Namen der Spalten zurück, die mit dem angegebenen Typ übereinstimmen.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Gibt eine Liste mit den Namen der Spalten aus Tabelle "<code>table</code>" zurück, die mit den in "<code>listOfTypes</code>" angegebenen Typen übereinstimmen.


## Examples

### Example #1 
Gibt die Namen von Spalten vom Typ &#34;Number.Type&#34; aus der Tabelle zurück.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
