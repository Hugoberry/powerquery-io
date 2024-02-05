---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Ersätter angivet radintervall med den eller de angivna raderna.


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

Ersätter angivet antal rader, <code>count</code>, i angivna indata, <code>table</code>, med angivet <code>rows</code>, med början efter <code>offset</code>. Parametern <code>rows</code> är en lista med poster.    <ul>       <li><code>table</code>: Tabellen där ersättningen utförs.</li>       <li><code>offset</code>: Antalet rader som ska hoppas över innan ersättningen görs.</li>       <li><code>count</code>: Antalet rader som ska ersättas.</li>       <li><code>rows</code>: Listan med radposter som ska infogas i <code>table</code> vid positionen som anges av <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Startar vid position 1, ersätter 3 rader.
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
