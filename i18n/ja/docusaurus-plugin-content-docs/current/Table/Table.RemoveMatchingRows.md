---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

テーブルに出現する指定された行をすべて削除します。


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> に出現する指定された <code>rows</code> をすべて削除します。    省略可能なパラメーター <code>equationCriteria</code> を指定すると、テーブルの行と行の比較を制御できます。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; から [a = 1] の行をすべて削除します。
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
