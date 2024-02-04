---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Ersetzt alle angegebenen Zeilen durch die bereitgestellten Zeilen.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Ersetzt alle angegebenen Zeilen im Element vom Typ "<code>table</code>" durch die bereitgestellten Zeilen. Die zu ersetzenden Zeilen und die Ersetzungen werden in "<code>replacements</code>" im Format "\{old, new}" angegeben.    Der Vergleich zwischen den Zeilen der Tabelle kann mithilfe eines optionalen Parameters (<code>equationCriteria</code>) gesteuert werden.


## Examples

### Example #1 
Ersetzt die Zeilen [a = 1, b = 2] und [a = 2, b = 3] durch [a = -1, b = -2],[a = -2, b = -3] in der Tabelle.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
