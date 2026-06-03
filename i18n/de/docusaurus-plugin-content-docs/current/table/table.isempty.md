---
title: Table.IsEmpty
---

# Table.IsEmpty


Gibt an, ob die Tabelle Zeilen enthält.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Gibt an, ob das Element vom Typ "`table`" Zeilen enthält. Gibt `true` zurück, falls keine Zeilen vorhanden sind (die Tabelle also leer ist). Andernfalls wird `false` zurückgegeben.


## Examples

### Example #1
Ermittelt, ob die Tabelle leer ist.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2
Ermittelt, ob die Tabelle `({})` leer ist.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
