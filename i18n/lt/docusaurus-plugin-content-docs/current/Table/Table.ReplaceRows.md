---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Pakeičiamas nurodytas skaičius eilučių (<code>count</code>) įvestyje <code>table</code> į nurodytą <code>rows</code>, pradedant po <code>offset</code>. Parametras <code>rows</code> yra įrašų sąrašas.    <ul>       <li><code>table</code>: lentelė, kurioje atliekamas pakeitimas.</li>       <li><code>offset</code>: eilučių, kurias reikia praleisti prieš atliekant pakeitimą, skaičius.</li>       <li><code>count</code>: eilučių, kurias reikia pakeisti, skaičius.</li>       <li><code>rows</code>: <code>offset</code> nurodytoje vietoje į <code>table</code> įterptinų eilutės įrašų sąrašas.</li>    </ul>


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
