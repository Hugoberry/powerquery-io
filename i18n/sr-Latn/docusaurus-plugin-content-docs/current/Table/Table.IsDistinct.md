---
title: Table.IsDistinct
---

# Table.IsDistinct


## Description

Pokazuje da li tabela sadrži samo posebne redove (bez duplikata).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Details

Pokazuje da li <code>table</code> sadrži samo posebne redove (bez duplikata). Vraća <code>true</code> ako su redovi posebni, a <code>false</code> ako nisu.    Opcionalni parametar, <code>comparisonCriteria</code>, navodi koje se kolone iz tabele testiraju na duplikate. Ako se <code>comparisonCriteria</code> ne navede, testiraju se sve kolone.


## Examples

### Example #1 
Utvrđivanje da li je tabela posebna.
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
Utvrđivanje da li je tabela posebna u koloni.
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
