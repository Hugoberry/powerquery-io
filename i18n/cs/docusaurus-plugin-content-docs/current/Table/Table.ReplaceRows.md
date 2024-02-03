---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Nahradí zadaný počet řádků (<code>count</code>) ve vstupu <code>table</code> zadaným seznamem <code>rows</code> začínajícím po řádku <code>offset</code>. Parametr <code>rows</code> představuje seznam záznamů.    <ul>       <li><code>table</code>: Tabulka, ve které se provádí nahrazení</li>       <li><code>offset</code>: Počet řádků, které mají být přeskočeny po nahrazení</li>       <li><code>count</code>: Počet řádků, které mají být nahrazeny</li>       <li><code>rows</code>: Seznam záznamů řádků, které mají být vloženy do tabulky <code>table</code> v umístění zadaném hodnotou <code>offset</code></li>    </ul>


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
