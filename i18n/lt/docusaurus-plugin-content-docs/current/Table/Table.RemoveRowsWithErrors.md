---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

Pateikiama lentelė su eilutėmis, pašalintomis iš įvesties lentelės, kurių bent viename langelyje yra klaida. Jei nurodytas stulpelių sąrašas, klaidos tikrinamos tik nurodytų stulpelių langeliuose.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Pateikiama lentelė su eilutėmis, pašalintomis iš įvesties lentelės, kurių bent viename langelyje yra klaida. Jei nurodytas stulpelių sąrašas, klaidos tikrinamos tik nurodytų stulpelių langeliuose.


## Examples

### Example #1 
Pašalinkite klaidos reikšmę iš pirmos eilutės.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
