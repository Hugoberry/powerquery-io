---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Fjerner alle forekomster af de angivne rækker fra tabellen.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Fjerner alle forekomster af den angivne <code>rows</code> fra <code>table</code>.    Der kan angives en valgfri parameter <code>equationCriteria</code> for at styre sammenligningen mellem rækkerne i tabellen.


## Examples

### Example #1 
Fjern de rækker, hvor [a = 1], fra tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
