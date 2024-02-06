---
title: Table.ContainsAny
---

# Table.ContainsAny


指示任何指定的记录是否显示为表中的各行。


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

指示记录列表 <code>rows</code> 中任何指定的记录是否显示为 <code>table</code> 中的各行。    可以指定一个可选参数 <code>equationCriteria</code>，以控制表各行之间的比较。


## Examples

### Example #1 
确定表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 是否包含行 &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; 或 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
确定表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 是否包含行 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; 或 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
确定表 &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; 是否包含只比较列 [a] 的行 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; 或 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
