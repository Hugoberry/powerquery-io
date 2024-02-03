---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

返回任何指定的行在表中的一个或多个位置。


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

返回 <code>rows</code> 的列表在 <code>table</code> 中第一次出现的行位置。如果找不到该值，则返回 -1。    <ul>    <li><code>table</code>: 输入表。</li>       <li><code>rows</code>: 表中要查找其位置的行列表。</li>       <li><code>occurrence</code>: <i>[可选]</i> 指定要返回的行的出现次数。</li>       <li><code>equationCriteria</code>: <i>[可选]</i> 控制表行之间的比较。</li>    </ul>    


## Examples

### Example #1 
查找 [a = 2, b = 4] 或 [a = 6, b = 8] 在表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; 中第一次出现的位置。
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
查找 [a = 2, b = 4] 或 [a = 6, b = 8] 在表 &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt; 中所有出现的位置。
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
