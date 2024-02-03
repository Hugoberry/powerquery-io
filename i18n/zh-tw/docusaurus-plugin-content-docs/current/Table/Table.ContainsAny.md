---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

指出任何指定的記錄是否都顯示成資料表中的資料列。


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

指出記錄清單 <code>rows</code> 中任何指定的記錄是否都顯示成 <code>table</code> 中的資料列。    可指定選擇性參數 <code>equationCriteria</code> 以控制資料表資料列之間的比較方式。


## Examples

### Example #1 
判斷資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 是否包含資料列 &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; 或 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;。
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
判斷資料表 &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 是否包含資料列 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; 或 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;。
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
在單獨比較資料行 [a] 的情況下，判斷資料表 &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; 是否包含資料列 &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; 或 &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;。
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
