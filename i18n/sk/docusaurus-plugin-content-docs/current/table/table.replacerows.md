---
title: Table.ReplaceRows
---

# Table.ReplaceRows


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


## Remarks

Nahradí zadaný počet riadkov `count` vo vstupe `table` zadaným parametrom `rows`, začínajúc po umiestnení `offset`. Parameter `rows` tvorí zoznam záznamov.

-   `table`: Tabuľka, v ktorej sa vykoná nahradenie.
-   `offset`: Počet riadkov, ktoré sa majú vynechať pred spustením nahradzovania.
-   `count`: Počet riadkov, ktoré sa majú nahradiť.
-   `rows`: Zoznam záznamov riadkov, ktoré sa majú vložiť do tabuľky `table` v umiestnení zadanom pomocou funkcie `offset`.


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
