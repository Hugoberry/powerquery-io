---
title: Table.IsDistinct
---

# Table.IsDistinct


Indica si la taula només conté files diferents (no duplicades).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Indica si l'element `table` només conté files diferents (no duplicades). Retorna `true` si les files són diferents i `false` en cas contrari. Un paràmetre opcional, `comparisonCriteria`, especifica en quines columnes de la taula es comprova si hi ha duplicacions. Si no s'especifica `comparisonCriteria`, es comproven totes les columnes.


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
