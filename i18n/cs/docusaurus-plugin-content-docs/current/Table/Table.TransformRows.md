---
title: Table.TransformRows
---

# Table.TransformRows


## Description

Transformuje řádky tabulky pomocí zadané funkce transformace.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

Vytvoří <code>seznam</code> díky využití operace <code>transform</code> pro každý řádek v <code>table</code>.


## Examples

### Example #1 
Převede řádky tabulky na seznam čísel.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Převede řádky numerické tabulky na textové záznamy.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
