---
title: Table.IsDistinct
---

# Table.IsDistinct


Udáva, či tabuľka obsahuje iba rozdielne riadky (nie duplikáty).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Udáva, či tabuľka `table` obsahuje iba rozdielne riadky (nie duplikáty). Vráti hodnotu `true`, ak sú riadky rozdielne, inak vráti hodnotu `false`. Voliteľný parameter `comparisonCriteria` určí, v ktorých stĺpcoch tabuľky sa testuje duplicita. Ak parameter `comparisonCriteria` nie je zadaný, testujú sa všetky stĺpce.


## Examples

### Example #1
Určte, či je tabuľka rozdielna.
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
Určte, či je tabuľka rozdielna v stĺpci.
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
