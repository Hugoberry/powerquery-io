---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


Erstatter alle de angivne rækker med den eller de leverede rækker.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Remarks

Erstatter alle de angivne rækker i <code>table</code> med de leverede. De rækker, der skal erstattes, og erstatningerne er angivet i <code>replacements</code> i formatet \{old, new}.    Der kan angives en valgfri parameter af typen <code>equationCriteria</code> for at styre sammenligningen mellem rækkerne i tabellen.


## Examples

### Example #1 
Erstat rækkerne [a = 1, b = 2] og [a = 2, b = 3] med [a = -1, b = -2],[a = -2, b = -3] i tabellen.
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
