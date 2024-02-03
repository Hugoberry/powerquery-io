---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Tar bort alla förekomster av de angivna raderna från tabellen.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Tar bort alla förekomster av den angivna <code>rows</code> från <code>table</code>.    En valfri parameter <code>equationCriteria</code> kan anges för att hantera jämförelsen mellan raderna i tabellen.


## Examples

### Example #1 
Ta bort alla rader där [a = 1] från tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
