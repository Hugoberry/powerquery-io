---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Înlocuieşte toate rândurile specificate cu rândurile furnizate.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Înlocuiește toate rândurile specificate din <code>table</code> cu cele furnizate. Rândurile de înlocuit și înlocuirile sunt specificate în <code>replacements</code>, utilizând formatarea \{old, new}.    Poate fi specificat un parametru opțional <code>equationCriteria</code> pentru a controla comparația dintre rândurile tabelului.


## Examples

### Example #1 
Înlocuiți rândurile [a = 1, b = 2] și [a = 2, b = 3] cu [a = -1, b = -2],[a = -2, b = -3] în tabel.
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
