---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

指定されたすべての行を指定された行に置き換えます。


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> の指定されたすべての行を指定された行に置き換えます。置き換え前の行と置き換え後の行は、\{old, new} という形式を使用して <code>replacements</code> で指定されます。    省略可能な <code>equationCriteria</code> パラメーターを指定すると、テーブルの行と行の比較を制御できます。


## Examples

### Example #1 
テーブルの行 [a = 1, b = 2] と [a = 2, b = 3] を、[a = -1, b = -2] と [a = -2, b = -3] に置き換えます。
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
