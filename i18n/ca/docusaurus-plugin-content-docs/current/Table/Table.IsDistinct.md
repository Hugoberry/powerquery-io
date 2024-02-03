---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Indica si la taula només conté files diferents (no duplicades).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Indica si l'element <code>table</code> només conté files diferents (no duplicades). Retorna <code>true</code> si les files són diferents i <code>false</code> en cas contrari.    Un paràmetre opcional, <code>comparisonCriteria</code>, especifica en quines columnes de la taula es comprova si hi ha duplicacions. Si no s'especifica <code>comparisonCriteria</code>, es comproven totes les columnes.


## Examples

### Example #1 
Determina si la taula és diferent.
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
Determina si la taula és diferent de la columna.
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
