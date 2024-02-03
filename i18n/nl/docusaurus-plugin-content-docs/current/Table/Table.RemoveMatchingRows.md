---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Verwijdert alle instanties van de opgegeven rijen uit de tabel.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Hiermee worden alle herhalingen van de opgegeven <code>rows</code> van de <code>table</code> verwijderd. Een optionele parameter <code>equationCriteria</code> kan worden opgegeven voor het aansturen van de vergelijking tussen de rijen van de tabel.


## Examples

### Example #1 
Verwijdert uit de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; alle rijen waarin [a = 1].
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
