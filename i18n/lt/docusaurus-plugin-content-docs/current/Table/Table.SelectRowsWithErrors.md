---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Pateikiama lentelė tik su eilutėmis iš įvesties lentelės, kurių bent viename langelyje yra klaida. Jei nurodytas stulpelių sąrašas, klaidos tikrinamos tik nurodytų stulpelių langeliuose.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Pateikiama lentelė tik su eilutėmis iš įvesties lentelės, kurių bent viename langelyje yra klaida. Jei nurodytas stulpelių sąrašas, klaidos tikrinamos tik nurodytų stulpelių langeliuose.


## Examples

### Example #1 
Pasirinkite klientų vardus, kurių eilutėse yra klaidų.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
