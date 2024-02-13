---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Rimuove tutte le occorrenze delle righe specificate dalla tabella.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Rimuove tutte le occorrenze di <code>rows</code> da <code>table</code>.    Facoltativamente, è possibile specificare il parametro <code>equationCriteria</code> per controllare il confronto tra le righe della tabella.


## Examples

### Example #1 
Rimuovere tutte le righe dove [a = 1] dalla tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
