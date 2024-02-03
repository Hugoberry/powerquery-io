---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

레코드 열이나 테이블 열을 포함 테이블의 여러 열로 확장합니다.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

<code>table</code>[<code>column</code>]의 테이블을 여러 행 및 열로 확장합니다. <code>columnNames</code>은(는) 내부 테이블에서 확장할 열을 선택하는 데 사용됩니다. 기존 열과 새 열 간의 충돌을 방지하려면 <code>newColumnNames</code>을(를) 지정합니다.


## Examples

### Example #1 
&lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; 테이블의 &lt;code&gt;[a]&lt;/code&gt; 열에 있는 테이블 열을 3개의 열 &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; 및 &lt;code&gt;[t.c]&lt;/code&gt;으로 확장합니다.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
