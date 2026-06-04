---
title: Table.IsDistinct
---

# Table.IsDistinct


Indica se a táboa contén só filas diferentes (non duplicadas).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Indica se `table` contén só filas diferentes (non duplicadas). Devolve `true` se as filas son diferentes, se non, `false`. Un parámetro opcional, `comparisonCriteria`, especifica en que columnas da táboa se proba a duplicación. Se non se especifica `comparisonCriteria`, próbanse todas as columnas.


## Examples

### Example #1
Determinar se a táboa é diferente.
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
Determinar se a táboa é diferente na columna.
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
