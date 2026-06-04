---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Nahradí zadaný rozsah řádků zadanými řádky.


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

Nahradí zadaný počet řádků (`count`) ve vstupu `table` zadaným seznamem `rows` začínajícím po řádku `offset`. Parametr `rows` představuje seznam záznamů.

-   `table`: Tabulka, ve které se provádí nahrazení
-   `offset`: Počet řádků, které mají být přeskočeny po nahrazení
-   `count`: Počet řádků, které mají být nahrazeny
-   `rows`: Seznam záznamů řádků, které mají být vloženy do tabulky `table` v umístění zadaném hodnotou `offset`


## Examples

### Example #1
Od pozice 1 nahradí 3 řádky.
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
