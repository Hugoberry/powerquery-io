---
title: Table.Range
---

# Table.Range


Gibt die Zeilen ab dem angegebenen Offset zurück.


## Syntax

```powerquery
Table.Range(
    table as table,
    offset as number,
    optional count as number
) as table
```


## Remarks

Gibt die Zeilen aus dem Element vom Typ "<code>table</code>" ab dem angegebenen Wert (<code>offset</code>) zurück. Die Anzahl der zurückzugebenden Zeilen kann mit dem optionalen Parameter "<code>count</code>" angegeben werden. Standardmäßig werden alle Zeilen nach dem Offset zurückgegeben.


## Examples

### Example #1 
Gibt alle Zeilen ab dem Offset 1 aus der Tabelle zurück.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
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


### Example #2 
Gibt eine Zeile ab dem Offset 1 aus der Tabelle zurück.
```powerquery
Table.Range(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]})
```




## Category
Table.Row operations
