---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Iš lentelės pašalinami visi nurodytų eilučių atvejai.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Iš <code>table</code> pašalinami visi nurodytų <code>rows</code> atvejai.    Galima nurodyti pasirenkamą parametrą <code>equationCriteria</code>, norint valdyti lentelės eilučių palyginimą.


## Examples

### Example #1 
Pašalinkite visas eilutes, kai [a = 1], iš lentelės &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
