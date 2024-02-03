---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Odebere všechny výskyty zadaných řádků z tabulky.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Odebere všechny výskyty zadaných položek <code>rows</code> z tabulky <code>table</code>.    Za účelem řízení porovnání mezi řádky tabulky může být určen volitelný parametr <code>equationCriteria</code>.


## Examples

### Example #1 
Odebere z tabulky &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; všechny řádky, ve kterých platí [a = 1].
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
