---
title: Table.Max
---

# Table.Max


## Description

指定された条件を使用して、最大の行または既定値を返します。


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

<code>comparisonCriteria</code> に基づいて <code>table</code> の最大の行を返します。テーブルが空の場合は、省略可能な <code>default</code> 値を返します。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; で列 [a] の最大値を含む行を探します。
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2 
テーブル &lt;code&gt;(\{})&lt;/code&gt; で列 [a] の最大値を含む行を探します。空の場合は、-1 を返します。
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
