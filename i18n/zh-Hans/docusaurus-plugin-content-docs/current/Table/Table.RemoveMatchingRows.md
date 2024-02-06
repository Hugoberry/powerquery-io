---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


从表中删除出现的所有指定行。


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

从 <code>table</code> 中删除出现的所有指定 <code>rows</code>。    可以指定一个可选参数 <code>equationCriteria</code>，以控制表各行之间的比较。


## Examples

### Example #1 
从表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; 中删除其中具有 [a = 1] 的任何行。
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
