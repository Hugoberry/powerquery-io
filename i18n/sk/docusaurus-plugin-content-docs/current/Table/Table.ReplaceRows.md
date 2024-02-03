---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Nahradí zadaný rozsah riadkov uvedenými riadkami.


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

Nahradí zadaný počet riadkov <code>count</code> vo vstupe <code>table</code> zadaným parametrom <code>rows</code>, začínajúc po umiestnení <code>offset</code>. Parameter <code>rows</code> tvorí zoznam záznamov.    <ul>       <li><code>table</code>: Tabuľka, v ktorej sa vykoná nahradenie.</li>       <li><code>offset</code>: Počet riadkov, ktoré sa majú vynechať pred spustením nahradzovania.</li>       <li><code>count</code>: Počet riadkov, ktoré sa majú nahradiť.</li>       <li><code>rows</code>: Zoznam záznamov riadkov, ktoré sa majú vložiť do tabuľky <code>table</code> v umiestnení zadanom pomocou funkcie <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Počnúc pozíciou 1 nahraďte 3 riadky.
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
