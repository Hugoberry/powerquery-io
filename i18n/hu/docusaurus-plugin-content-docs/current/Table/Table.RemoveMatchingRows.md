---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Eltávolítja a megadott sorok összes előfordulását a táblából.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Eltávolítja a megadott <code>rows</code> összes előfordulását a következőből: <code>table</code>.    A nem kötelező <code>equationCriteria</code> paraméterrel határozható meg a tábla sorainak összehasonlítása.


## Examples

### Example #1 
Eltávolítja az olyan sorokat az &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; táblából, ahol [a = 1].
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
