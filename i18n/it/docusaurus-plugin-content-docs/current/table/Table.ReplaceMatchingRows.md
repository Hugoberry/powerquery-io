---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Sostituisce tutte le righe specificate con le righe fornite.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Sostituisce tutte le righe specificate in <code>table</code> con le righe fornite. Le righe da sostituire e le sostituzioni vengono specificate in <code>replacements</code>, usando il formato \{old, new}.    Facoltativamente, è possibile specificare il parametro <code>equationCriteria</code> per controllare il confronto tra le righe della tabella.


## Examples

### Example #1 
Sostituire le righe [a = 1, b = 2] e [a = 2, b = 3] con [a = -1, b = -2],[a = -2, b = -3] nella tabella.
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
