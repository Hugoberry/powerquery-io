---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Gibt an, ob die Tabelle nur eindeutige Zeilen (also keine Duplikate) enthält.


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Gibt an, ob das Element vom Typ "<code>table</code>" nur eindeutige Zeilen (also keine Duplikate) enthält. Gibt <code>true</code> zurück, wenn die Zeilen eindeutig sind. Andernfalls wird <code>false</code> zurückgegeben.    Mit einem optionalen Parameter (<code>comparisonCriteria</code>) kann angegeben werden, welche Spalten aus der Tabelle auf mehrfache Vorkommen überprüft werden sollen. Ohne Angabe von "<code>comparisonCriteria</code>" werden alle Spalten überprüft.


## Examples

### Example #1 
Ermittelt, ob die Tabelle eindeutig ist.
```powerquery
Table.IsDistinct(
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
true
```


### Example #2 
Ermittelt, ob die Tabelle in der Spalte eindeutig ist.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
