---
title: Table.IsDistinct
---

# Table.IsDistinct


Označuje, ali tabela vsebuje le razlikovalne vrstice (brez dvojnikov).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Označuje, ali tabela `table` vsebuje le razlikovalne vrstice (brez dvojnikov). Vrne `true`, če so vrstice razlikovalne, sicer vrne `false`. Izbirni parameter `comparisonCriteria` določa, v katerih stolpcih tabele bo preverjeno podvajanje. Če parameter `comparisonCriteria` ni določen, so preverjeni vsi stolpci.


## Examples

### Example #1
Ugotovite, ali je tabela razlikovalna.
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
Ugotovite, ali je tabela razlikovalna v stolpcu.
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
