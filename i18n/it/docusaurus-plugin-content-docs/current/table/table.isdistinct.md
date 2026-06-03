---
title: Table.IsDistinct
---

# Table.IsDistinct


Indica se la tabella contiene solo le righe distinte (nessun duplicato).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Indica se `table` contiene solo le righe distinte (nessun duplicato). Restituisce `true` se le righe sono distinte, in caso contrario `false`. Il parametro facoltativo `comparisonCriteria` specifica le colonne della tabella da testare per la duplicazione. Se `comparisonCriteria` non viene specificato, verranno testate tutte le colonne.


## Examples

### Example #1
Determinare se la tabella è distinta.
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
Determinare se la tabella è distinta nella colonna.
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
