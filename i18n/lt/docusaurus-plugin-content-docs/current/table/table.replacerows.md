---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Pakeičiamas nurodytas eilučių diapazonas pateikta (-omis) eilute (-ėmis).


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Pakeičiamas nurodytas skaičius eilučių (`count`) įvestyje `table` į nurodytą `rows`, pradedant po `offset`. Parametras `rows` yra įrašų sąrašas.

-   `table`: lentelė, kurioje atliekamas pakeitimas.
-   `offset`: eilučių, kurias reikia praleisti prieš atliekant pakeitimą, skaičius.
-   `count`: eilučių, kurias reikia pakeisti, skaičius.
-   `rows`: `offset` nurodytoje vietoje į `table` įterptinų eilutės įrašų sąrašas.


## Examples

### Example #1
Pradėdami nuo 1 padėties, pakeiskite 3 eilutes.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
