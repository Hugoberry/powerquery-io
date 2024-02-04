---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Entfernt alle Vorkommen der angegebenen Zeilen aus der Tabelle.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Entfernt alle Vorkommen des angegebenen Elements vom Typ "<code>rows</code>" aus "<code>table</code>".    Der Vergleich zwischen den Zeilen der Tabelle kann mithilfe eines optionalen Parameters (<code>equationCriteria</code>) gesteuert werden.


## Examples

### Example #1 
Entfernt sämtliche Zeilen mit &#34;[a = 1]&#34; aus der Tabelle &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
