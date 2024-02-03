---
title: Table.Unpivot
---

# Table.Unpivot


## Description

테이블의 열 집합을 특성-값 쌍으로 변환합니다.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

각 행에 포함된 값의 다른 부분과 결합하여 테이블의 열 집합을 특성-값 쌍으로 변환합니다.


## Examples

### Example #1 
&lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; 테이블의 &#34;a&#34;, &#34;b&#34; 및 &#34;c&#34; 열을 특성-값 쌍으로 피벗 해제합니다.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
