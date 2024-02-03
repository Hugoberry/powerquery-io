---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

Erstatter det angivne rækkeområde med den eller de leverede rækker.


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

Erstatter et angivet antal rækker, <code>count</code>, i inputtet <code>table</code> med de angivne <code>rows</code>, med start ved <code>offset</code>. Parameteren <code>rows</code> er en liste over poster.    <ul>       <li><code>table</code>: Den tabel, hvor erstatningen udføres.</li>       <li><code>offset</code>: Det antal rækker, der skal springes over, før erstatningen udføres.</li>       <li><code>count</code>: Det antal rækker, der skal erstattes.</li>       <li><code>rows</code>: Den liste over rækker, der skal indsættes i <code>table</code> på den position, der er angivet af <code>offset</code>.</li>    </ul>


## Examples

### Example #1 
Erstat tre rækker med start ved position 1.
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
