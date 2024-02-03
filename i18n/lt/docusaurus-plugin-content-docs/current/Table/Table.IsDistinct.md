---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Nurodoma, ar lentelėje yra tik skirtingos eilutės (be pasikartojimų).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Nurodoma, ar <code>table</code> yra tik skirtingos eilutės (be pasikartojimų). Pateikiama <code>true</code>, jei eilutės yra skirtingos; priešingu atveju pateikiama <code>false</code>.    Pasirenkamas parametras <code>comparisonCriteria</code> nurodo, kurie lentelės stulpeliai tikrinami, ar nėra pasikartojantys. Jei <code>comparisonCriteria</code> nenurodytas, tikrinami visi stulpeliai.


## Examples

### Example #1 
Nustatykite, ar lentelė yra skirtinga.
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
Nustatykite, ar lentelė yra skirtinga stulpelyje.
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
