---
title: Table.IsDistinct
---

# Table.IsDistinct


Pokazuje da li tabela sadrži samo posebne redove (bez duplikata).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Pokazuje da li `table` sadrži samo posebne redove (bez duplikata). Vraća `true` ako su redovi posebni, a `false` ako nisu. Opcionalni parametar, `comparisonCriteria`, navodi koje se kolone iz tabele testiraju na duplikate. Ako se `comparisonCriteria` ne navede, testiraju se sve kolone.


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
