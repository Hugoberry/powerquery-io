---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

使用提供的行替换所有指定的行。


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

使用提供的行替换 <code>table</code> 中所有指定的行。要替换的行以及替换项在 <code>replacements</code> 中使用 \{old, new} 格式指定。    可以指定一个可选 <code>equationCriteria</code> 参数，以控制表各行之间的比较。


## Examples

### Example #1 
在表中将行 [a = 1, b = 2] 和 [a = 2, b = 3] 替换为 [a = -1, b = -2] 和 [a = -2, b = -3]。
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
