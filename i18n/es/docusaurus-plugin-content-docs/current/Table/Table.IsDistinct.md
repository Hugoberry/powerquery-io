---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Indica si la tabla contiene solo filas distintas (sin duplicados).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Indica si la <code>table</code> contiene solo filas distintas (sin duplicados). Devuelve <code>true</code> si las filas son distintas, <code>false</code> en caso contrario.    Un parámetro opcional, <code>comparisonCriteria</code>, especifica en qué columnas de la tabla se comprueba si hay duplicación. Si no se especifica <code>comparisonCriteria</code>, se comprueban todas las columnas.


## Examples

### Example #1 
Determinar si la tabla es distinta.
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
Determinar si la tabla es distinta en la columna.
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
