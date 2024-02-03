---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Elimină toate ocurenţele rândurilor specificate din tabel.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Elimină toate ocurențele <code>rows</code> specificate din <code>table</code>.    Poate fi specificat un parametru opțional, <code>equationCriteria</code>, pentru a controla comparația între rândurile tabelului.


## Examples

### Example #1 
Eliminaţi toate rândurile în care [a = 1] din tabelul &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
